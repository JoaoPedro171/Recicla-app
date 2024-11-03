import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../serviços/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string = '';
  senha: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    this.authService.login(this.email, this.senha).subscribe({
      next: (res) => {
        console.log('Login realizado com sucesso:', res);
        this.router.navigate(['/carregar']);
      },
      error: (err) => {
        console.error('Erro ao fazer login:', err);
      },
    });
  }
}
