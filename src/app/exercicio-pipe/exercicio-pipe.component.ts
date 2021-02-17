import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-pipe',
  templateUrl: './exercicio-pipe.component.html',
  styleUrls: ['./exercicio-pipe.component.scss'],
  providers: [
    DecimalPipe
  ]
})
export class ExercicioPipeComponent {

  constructor(private decimalPipe: DecimalPipe){ }

  compras = [
    {
      produto: 'lâmpadas',
      valor: 299.29,
      quantidade: 2,
      peso: 0,
      data: new Date(2020, 1, 1, 15, 20),
    },
    {
      produto: 'farinha',
      valor: 450.29,
      quantidade: 2,
      peso: 29.333333,
      data: new Date(2020, 1, 10, 19, 30),
    },
  ];

  getPesoFormatado(peso: number){
    if(peso <= 0){
      return 'sem peso';
    }

    return this.decimalPipe.transform(peso, '1.1-2') + ' Kg';
  }
}
