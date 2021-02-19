import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';
import { Contatos } from './contatos.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  API_URL = environment.API_URL

  constructor(private http: HttpClient) { }

  getContatos(){
    return this.http.get<Contatos[]>(`${this.API_URL}/contatos`)
  }

  getContatoDetails(id: string){
    return this.http.get<Contatos>(`${this.API_URL}/contatos/${id}`);
  }
}
