import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContaService } from 'src/app/serviços/conta-service.service';

@Component({
  selector: 'app-senha',
  templateUrl: './senha.page.html',
  styleUrls: ['./senha.page.scss'],
})
export class SenhaPage {
  email: string | undefined;

  constructor(private router: Router, private contaService: ContaService) {}

  recuperarSenha() {
    if (this.email) {
      this.contaService.recuperarSenha(this.email).subscribe({
        next: (res) => {
          console.log('Solicitação de recuperação de senha enviada:', res);
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Erro ao solicitar recuperação de senha:', err);
        },
      });
    }
  }

  voltar() {
    this.router.navigate(['/home']);
  }
}
