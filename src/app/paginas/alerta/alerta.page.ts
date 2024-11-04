import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';
import { AvisosService } from 'src/app/serviços/avisos-service.service';
import { AuthService } from 'src/app/serviços/auth.service'; // Importe o serviço de autenticação

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {
  foto: string | undefined;
  categoria: string | undefined;
  descricao: string | undefined;
  localidade: string | undefined;

  constructor(
    private router: Router, 
    private avisosService: AvisosService,
    private authService: AuthService // Injete o serviço de autenticação
  ) {}

  async tirarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
    });
    this.foto = image.webPath;
  }

  voltar() {
    this.router.navigate(['/carregar']);
  }

  salvarAvisos() {
    // Obtenha o ID do usuário logado do serviço de autenticação
    const usuarioId = this.authService.getUsuarioId(); 

    const dadosAlerta = {
      foto: this.foto,
      categoria: this.categoria,
      descricao: this.descricao,
      localidade: this.localidade,
      usuarioId: usuarioId // Associe o alerta ao usuário logado
    };

    // Enviar os dados para o back-end
    this.avisosService.enviarAlerta(dadosAlerta).subscribe({
      next: (res) => {
        console.log('Alerta salvo com sucesso:', res);
        // Redirecione ou exiba feedback para o usuário
      },
      error: (err) => {
        console.error('Erro ao salvar alerta:', err);
        // Exiba uma mensagem de erro para o usuário
      },
    });
  }

  ngOnInit() {
    // Inicialização da localidade, se aplicável
  }
}
