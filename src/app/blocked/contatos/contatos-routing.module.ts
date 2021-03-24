import { NovoContatoComponent } from './novo-contato/novo-contato.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatosComponent } from './contatos/contatos.component';
import { DetalhesContatosComponent } from './detalhes-contatos/detalhes-contatos.component';

const routes: Routes = [
  {
    path: '',
    component: ContatosComponent
  },
  {
    path: 'novo',
    component: NovoContatoComponent
  },
  {
    path: ':id',
    component: DetalhesContatosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule { }
