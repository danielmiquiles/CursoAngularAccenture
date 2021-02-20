import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NaoEstaLogadoGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  canActivate(): boolean {
    const naoEstaLogado = this.authService.estaLogado();
    if(!naoEstaLogado){
      return true;
    }
    this.router.navigate(['home'])
    return false;
  }
  
}
