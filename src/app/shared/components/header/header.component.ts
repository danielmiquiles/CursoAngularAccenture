import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;

  constructor() {
    console.log('construtor');
  }

  ngOnInit(): void {
    console.log('on init');
    
  }

  ngAfterViewInit() {
    console.log('view init ');
    
  }
}
