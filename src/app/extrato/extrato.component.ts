import { ExtratoService } from './extrato.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transacoes = [];

  constructor(private extratoService: ExtratoService) { }

  ngOnInit(): void {
    this.transacoes = this.extratoService.getTransactions();
  }

}
