import { Injectable } from '@angular/core';
import { Observable, of, throwError, timer } from 'rxjs';
import { delay, mergeMap, tap } from 'rxjs/operators';

import { AuthService } from '../shared/services/auth/auth.service';
import { LoginResponse } from './login.interfaces';

// import { AuthService } from '../../shared/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private authService: AuthService) { }

  logar(email: string, password: string): Observable<LoginResponse>{
    if(email === 'daniel@gmail.com' && password === '123'){
      return of({
        usuario: {
          nome: 'Daniel',
          email: 'daniel@gmail.com',
          sobrenome: 'Miquiles'
        },
        token: 'dHRH79c876676x5233m0fd75d'
      }).pipe(
        delay(3000),
        tap(response => {
          this.authService.setUsuario(response.usuario);
          this.authService.setToken(response.token);
        })
      );
    }

    return timer(5000)
    .pipe(
      mergeMap( () => throwError('Usuario ou senha incorretos'))
    )
  }
}
