import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs/operators';

import { Contatos } from './contatos.interfaces';
import { ContatosService } from './contatos.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements OnInit {

  contatos: Contatos[];
  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  constructor(private contatosService: ContatosService) { }

  ngOnInit(): void {
    this.carregaContatos();
  }

  carregaContatos(){
    this.estaCarregando = true;
    this.contatosService.getContatos()
    .pipe(
      take(1),
      finalize(()=> this.estaCarregando = false )
    )
    .subscribe(
      response => this.onSuccess(response),
      error => console.log(error)
    )    
  }

  onSuccess(response: Contatos[]){
    console.log(response);
    this.contatos = response
  }

}
