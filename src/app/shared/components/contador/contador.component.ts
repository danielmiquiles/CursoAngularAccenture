import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

  @Input() contador = 0;
  @Output() contadorChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  dec(){
    this.contador--;
    this.onClickButao();
  }

  inc(){
    this.contador++;
    this.onClickButao();
  }

  onClickButao(){
    this.contadorChange.emit(this.contador);
  }

}
