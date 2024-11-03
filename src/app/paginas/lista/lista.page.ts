import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AvisosService } from 'src/app/serviços/avisos-service.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  alertas: any[] = [];

  constructor(private router: Router, private avisosService: AvisosService) {}

  ngOnInit() {
    this.carregarAlertas();
  }

  carregarAlertas() {
    this.avisosService.buscarAlertas().subscribe({
      next: (res) => {
        this.alertas = res;
      },
      error: (err) => {
        console.error('Erro ao buscar alertas:', err);
      },
    });
  }

  voltar() {
    this.router.navigate(['/carregar']);
  }
}
