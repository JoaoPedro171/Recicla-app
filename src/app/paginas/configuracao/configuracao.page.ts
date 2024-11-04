import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/serviços/auth.service';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.page.html',
  styleUrls: ['./configuracao.page.scss'],
})
export class ConfiguracaoPage implements OnInit {
  nomeUsuario: string = '';
  emailUsuario: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    const usuarioLogado = this.authService.getUsuarioLogado();
    if (usuarioLogado) {
      this.nomeUsuario = usuarioLogado.nome;
      this.emailUsuario = usuarioLogado.email;
    }
  }  

  voltar() {
    this.router.navigate(['/carregar']);
  }

  seguranca() {
    this.router.navigate(['/seguranca']);
  }

  ajuda() {
    this.router.navigate(['/ajuda']);
  }

  usuario() {
    this.router.navigate(['/usuario']);
  }

  logout() {
    this.authService.logout();
  }
}
