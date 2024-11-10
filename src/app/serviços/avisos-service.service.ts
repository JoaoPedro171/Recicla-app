import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvisosService {
  private apiUrl = 'http://localhost:8080/alerta'; // URL do seu back-end

  constructor(private http: HttpClient) {}

  // Método para buscar alertas do usuário logado
  buscarAlertas(usuarioId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/meus-alerta?usuarioId=${usuarioId}`);
  }

  // Método para enviar um alerta
  enviarAlerta(dadosAlerta: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, dadosAlerta);
  }
}
