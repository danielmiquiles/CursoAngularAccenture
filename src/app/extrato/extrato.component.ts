import { ExtratoService } from './extrato.service';
import { Component, OnInit } from '@angular/core';
import { Transacao } from './extrato.interfaces';
import { finalize, take } from 'rxjs/operators';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  transacoes: Array<Transacao>;

  estaCarregando: boolean;
  erroNoCarregamento: boolean;
  pagina = 1;
  ultimaPagina: number;

  constructor(private extratoService: ExtratoService) {}

  ngOnInit(): void {
    this.carregarExtrato();
  }

  carregarExtrato() {
    // this.transacoes = this.extratoService.getTransactions();
    this.estaCarregando = true;
    this.erroNoCarregamento = false;
    this.extratoService.getTransactions(this.pagina)
    .pipe(
      take(1),
      finalize(() => this.estaCarregando = false)
    )
    .subscribe(
      (response) => this.onSuccess(response),
      (error) => this.onError(error),
    );
  }

  onSuccess(response: Transacao[]) {
    this.transacoes = response;
    if(this.transacoes.length < 10){
      this.ultimaPagina = this.pagina;
    }  
  }

  onError(error: any) {
    console.error(error);
    this.erroNoCarregamento = true;
  }

  paginaAnterior(){
    this.pagina--;
    this.carregarExtrato()
  }

  proximaPagina(){
    this.pagina++;
    this.carregarExtrato()
  }
}
