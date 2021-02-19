import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError, timer } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  logar(email: string, password: string){
    if(email === 'daniel@gmail.com' && password === '123'){
      return of({
        usuario: {
          nome: 'Daniel',
          email: 'daniel@gmail.com',
          sobrenome: 'Miquiles'
        },
        token: 'dHRH79c876676x5233m0fd75d'
      }).pipe(
        delay(3000)
      );
    }

    return timer(5000)
    .pipe(
      mergeMap( () => throwError('Usuario ou senha incorretos'))
    )
  }
}
