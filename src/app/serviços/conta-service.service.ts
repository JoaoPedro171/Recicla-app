import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContaService {
  private apiUrl = 'http://localhost:8080/usuario'; // URL base do usuário

  constructor(private http: HttpClient) {}

  registrarConta(dadosConta: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, dadosConta);
  }

  recuperarSenha(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/recuperar-senha`, { email });
  }
}
