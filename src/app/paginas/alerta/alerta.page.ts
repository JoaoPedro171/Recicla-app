import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';
import { AvisosService } from 'src/app/serviços/avisos-service.service';

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

  constructor(private router: Router, private avisosService: AvisosService) {}

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
    const dadosAlerta = {
      foto: this.foto,
      categoria: this.categoria,
      descricao: this.descricao,
      localidade: this.localidade,
    };

    // Enviar os dados para o back-end
    this.avisosService.enviarAlerta(dadosAlerta).subscribe({
      next: (res) => {
        console.log('Alerta salvo com sucesso:', res);
        // Adicione aqui alguma navegação ou feedback para o usuário
      },
      error: (err) => {
        console.error('Erro ao salvar alerta:', err);
        // Adicione feedback para o usuário em caso de erro
      },
    });
  }

  ngOnInit() {
    // Inicialização da localidade, se aplicável
  }
}
