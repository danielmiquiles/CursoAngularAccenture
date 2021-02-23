import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContatosRoutingModule } from './contatos-routing.module';
import { ContatosComponent } from './contatos/contatos.component';
import { DetalhesContatosComponent } from './detalhes-contatos/detalhes-contatos.component';


@NgModule({
  declarations: [
    ContatosComponent,
    DetalhesContatosComponent
  ],
  imports: [
    CommonModule,
    ContatosRoutingModule
  ],
  exports: [
    ContatosComponent,
    DetalhesContatosComponent
  ]
})
export class ContatosModule { }
