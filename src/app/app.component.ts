import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  titulo = 'Seja Bem Vindo';
  valorInicial = 10;

  recebido($event){
    this.valorInicial = $event;
  }
  
}
