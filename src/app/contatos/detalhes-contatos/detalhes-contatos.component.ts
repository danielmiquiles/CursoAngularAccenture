import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

import { Contatos } from '../contatos.interfaces';
import { ContatosService } from './../contatos.service';

@Component({
  selector: 'app-detalhes-contatos',
  templateUrl: './detalhes-contatos.component.html',
  styleUrls: ['./detalhes-contatos.component.scss'],
})
export class DetalhesContatosComponent implements OnInit {
  
  detalhes: Contatos;
  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  constructor(
    private route: ActivatedRoute,
    private contatoService: ContatosService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getContatoDetails(id);
  }

  getContatoDetails(id: string) {
    this.estaCarregando = true;
    this.contatoService
      .getContatoDetails(id)
      .pipe(
        take(1),
        finalize(() => (this.estaCarregando = false))
      )
      .subscribe(
        (response) => this.onSuccess(response),
        (error) => this.onError(error)
      );
  }

  onSuccess(response: Contatos) {    
    this.detalhes = response;
  }

  onError(error){
    this.erroNoCarregamento = true;
  }
}
