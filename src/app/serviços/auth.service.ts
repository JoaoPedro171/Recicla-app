import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://seu-backend-url.com/api'; // URL do seu back-end

  constructor(private http: HttpClient, private router: Router) {}

  // Método de login, que salva as informações do usuário no localStorage
  login(email: string, senha: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, senha }).pipe(
      tap((res) => {
        if (res && res.usuario) {
          // Salva as informações do usuário no localStorage
          localStorage.setItem('usuarioId', res.usuario.id);
          localStorage.setItem('nomeUsuario', res.usuario.nome);
          localStorage.setItem('emailUsuario', res.usuario.email);
        }
      })
    );
  }

  // Método para obter o ID do usuário logado
  getUsuarioId(): string | null {
    return localStorage.getItem('usuarioId');
  }

  // Método para obter os dados do usuário logado
  getUsuarioLogado() {
    const nome = localStorage.getItem('nomeUsuario');
    const email = localStorage.getItem('emailUsuario');
    if (nome && email) {
      return { nome, email };
    }
    return null;
  }

  alterarSenha(senhaAtual: string, novaSenha: string): Observable<any> {
    const usuarioId = this.getUsuarioId();
    return this.http.put<any>(`${this.apiUrl}/usuarios/${usuarioId}/alterar-senha`, {
      senhaAtual,
      novaSenha
    }).pipe(
      tap(() => {
        // Atualiza localmente a senha do usuário (opcional)
        localStorage.setItem('senhaUsuario', novaSenha);
      })
    );
  }

  // Método de logout para remover as informações do usuário do localStorage
  logout(): void {
    localStorage.removeItem('usuarioId');
    localStorage.removeItem('nomeUsuario');
    localStorage.removeItem('emailUsuario');
    this.router.navigate(['/home']);
  }
}
