import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContaService } from 'src/app/serviços/conta-service.service';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.page.html',
  styleUrls: ['./conta.page.scss'],
})
export class ContaPage {
  nome: string | undefined;
  email: string | undefined;
  senha: string | undefined;

  constructor(private router: Router, private contaService: ContaService) {}

  cadastrarConta() {
    const dadosConta = {
      nome: this.nome,
      email: this.email,
      senha: this.senha,
    };

    this.contaService.registrarConta(dadosConta).subscribe({
      next: (res) => {
        console.log('Conta registrada com sucesso:', res);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Erro ao registrar conta:', err);
      },
    });
    this.router.navigate(['/home']);
  };

  voltar() {
    this.router.navigate(['/home']);
  }
  
}
