import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { EstaLogadoGuard } from './shared/guards/esta-logado/esta-logado.guard';
import { NaoEstaLogadoGuard } from './shared/guards/nao-esta-logado/nao-esta-logado.guard';

const routes: Routes = [
  {
    path: 'blocked',
    loadChildren: () => import('./blocked/blocked.module').then( m => m.BlockedModule),
    canActivate: [EstaLogadoGuard]
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./blocked/home/home.module').then( m => m.HomeModule),
  //   canActivate: [EstaLogadoGuard]
  // },
  {
    path: 'login',
    // loadChildren: () => import('./login/login.module').then( m => m.LoginModule),
    component: LoginComponent,
    canActivate: [NaoEstaLogadoGuard]
  },
  {
    path: 'extrato',
    loadChildren: () => import('./blocked/extrato/extrato.module').then( m => m.ExtratoModule),
    canActivate: [EstaLogadoGuard]
  },
  {
    path: 'contato',
    loadChildren: () => import('../app/contatos/contatos.module').then( m => m.ContatosModule),
    canActivate: [EstaLogadoGuard]
  },
  {
    path: '',
    redirectTo: 'blocked',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NaoEncontradoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
