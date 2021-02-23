import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { Transacao } from './extrato.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  getTransactions(pagina: number){
    // Operadores rxjs
    // const error = throwError('Erro de carregamento');
    // return timer(5000)
    // .pipe(
    //   mergeMap( () => error)
    // )
    
    return this.http.get<Transacao[]>(`${this.API_URL}/transacoes`, {
      params: {
        _page: String(pagina),
      }
    });
  }
}
