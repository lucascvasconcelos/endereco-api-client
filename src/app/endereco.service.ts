import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  enderecoUrl = 'http://localhost:8000/';

  constructor(private http: HttpClient ) { }

  listar() {
    return this.http.get<any[]>(`${this.enderecoUrl}` + `enderecos`);
  }

  cadastrar(endereco: any) {
    return this.http.post(`${this.enderecoUrl}` + `endereco`, endereco);
  }

  deletar(id: any) {
    return this.http.delete(`${this.enderecoUrl}` + `endereco/` + id)
  }

  atualizar(id: any, endereco: any) {
    return this.http.put(`${this.enderecoUrl}` + `endereco/` + id, endereco)
  }
}
