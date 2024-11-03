import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContaService {
  private apiUrl = 'https://seu-backend-url.com/conta';

  constructor(private http: HttpClient) {}

  registrarConta(dadosConta: any): Observable<any> {
    return this.http.post(this.apiUrl, dadosConta);
  }
}
