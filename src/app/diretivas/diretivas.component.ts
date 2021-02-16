import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent {

  deveExibir = false;
  listaFrutas = [
    'Maçã',
    'Banana',
    'Mamão',
    'Laranja',
    'Limão'
  ];

  listaCarros = [
    {
      placa: 'CMN-9432',
      cor: 'Cinza'
    },
    {
      placa: 'ABC-9432',
      cor: 'Vermelho'
    },
    {
      placa: 'CDE-9432',
      cor: 'Prata'
    },
    {
      placa: 'FGH-9432',
      cor: 'Branco'
    },
    {
      placa: 'IJK-9432',
      cor: 'Preto'
    },
    {
      placa: 'CMN-9432',
      cor: 'Cinza'
    },


  ];

  trocaValor(){
    this.deveExibir = !this.deveExibir;
  }

}
