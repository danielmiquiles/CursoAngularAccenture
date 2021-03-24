import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

import { Contatos } from '../contatos.interfaces';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss'],
})
export class ContatosComponent implements OnInit {
  contatos: Contatos[];
  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  constructor(
    private contatosService: ContatosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregaContatos();
  }

  carregaContatos() {
    this.estaCarregando = true;
    this.contatosService
      .getContatos()
      .pipe(
        take(1),
        finalize(() => (this.estaCarregando = false))
      )
      .subscribe(
        (response) => this.onSuccess(response),
        (error) => console.log(error)
      );
  }

  onSuccess(response: Contatos[]) {
    this.contatos = response;
  }

  seeDetails(id: string) {
    this.router.navigate([`/contato/${id}`]);
  }

  deletarContato(id: string) {
    this.estaCarregando = true;
    this.contatosService
      .deleteContato(id)
      .pipe(
        take(1),
        finalize(() => (this.estaCarregando = false))
      )
      .subscribe(
        (response) => this.onSuccessDelete(Number(id)),
        (error) => console.error(error)
      );
  }

  onSuccessDelete(id: number) {
    this.contatos = this.contatos.filter((contato) => contato.id !== id);
  }

  novoContato(){
    this.router.navigate(['contato/novo']);
  }
}
