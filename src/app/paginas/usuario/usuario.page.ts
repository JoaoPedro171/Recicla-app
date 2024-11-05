import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/serviços/auth.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  nomeUsuario: string | null = '';
  emailUsuario: string | null = '';

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    const usuario = this.authService.getUsuarioLogado();
    if (usuario) {
      this.nomeUsuario = usuario.nome;
      this.emailUsuario = usuario.email;
    }
  }

  voltar() {
    this.router.navigate(['/configuracao']);
  }
}
