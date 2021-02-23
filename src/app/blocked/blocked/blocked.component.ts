import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blocked',
  templateUrl: './blocked.component.html',
  styleUrls: ['./blocked.component.scss']
})
export class BlockedComponent implements OnInit {

  titulo = 'Curso de Angular da Gama';

  constructor() { }

  ngOnInit(): void {
  }

}
