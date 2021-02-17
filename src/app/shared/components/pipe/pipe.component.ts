import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  filme = {
    titulo: 'harry potter',
    estrelas: 3.765676756,
    precoAluguel: 12.23,
    dataLancamento: '2020-02-01'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
