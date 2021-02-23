import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { Contatos } from './contatos.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  API_URL = environment.API_URL

  //PASSA ISSO COM 3° PARAMETRO NO CREATE POR EXEMPLO
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'TOKEN AQUI'
    })
  }

  constructor(private http: HttpClient) { }

  getContatos(){
    return this.http.get<Contatos[]>(`${this.API_URL}/contatos`)
  }

  getContatoDetails(id: string){
    return this.http.get<Contatos>(`${this.API_URL}/contatos/${id}`);
  }
  
  createContato(contato: Contatos){
    return this.http.post<Contatos[]>(`${this.API_URL}/contatos`, contato,)
  }

  updateContato(id: string, contato: Contatos){
    return this.http.put<Contatos[]>(`${this.API_URL}/contatos/${id}`, contato)
  }

  deleteContato(id: string){
    return this.http.delete<Contatos[]>(`${this.API_URL}/contatos/${id}`)
  }
}
