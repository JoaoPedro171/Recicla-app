import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AvisosService } from 'src/app/serviços/avisos-service.service';
import { AuthService } from 'src/app/serviços/auth.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  alertas: any[] = [];

  constructor(
    private router: Router,
    private avisosService: AvisosService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.carregarAlertas();
  }

  carregarAlertas() {
    const usuarioId = this.authService.getUsuarioId();
    if (usuarioId) {
      this.avisosService.buscarAlertas(usuarioId).subscribe({
        next: (res) => {
          this.alertas = res;
        },
        error: (err) => {
          console.error('Erro ao buscar alertas:', err);
        },
      });
    } else {
      console.error('Usuário não está logado');
    }
  }

  voltar() {
    this.router.navigate(['/carregar']);
  }
}
