import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AvisosService {
  private apiUrl = 'https://seu-backend-url.com/avisos'; // Coloque a URL do seu back-end

  constructor(private http: HttpClient) {}

  // Método para enviar dados do alerta para o back-end
  enviarAlerta(dadosAlerta: any): Observable<any> {
    return this.http.post(this.apiUrl, dadosAlerta);
  }

  // Método para buscar todos os alertas do back-end
  buscarAlertas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
