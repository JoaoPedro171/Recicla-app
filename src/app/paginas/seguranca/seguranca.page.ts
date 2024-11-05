import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';
import { AuthService } from 'src/app/serviços/auth.service';


@Component({
  selector: 'app-seguranca',
  templateUrl: './seguranca.page.html',
  styleUrls: ['./seguranca.page.scss'],
})
export class SegurancaPage implements OnInit {
  senhaAtual: string = '';
  novaSenha: string = '';
  gpsAtivado: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  voltar() {
    this.router.navigate(['/configuracao']);
  }

  alterarSenha() {
    if (this.senhaAtual && this.novaSenha) {
      this.authService.alterarSenha(this.senhaAtual, this.novaSenha).subscribe({
        next: () => {
          console.log('Senha alterada com sucesso.');
          alert('Senha alterada com sucesso!');
        },
        error: (err) => {
          console.error('Erro ao alterar senha:', err);
          alert('Erro ao alterar a senha. Verifique se a senha atual está correta.');
        }
      });
    } else {
      alert('Por favor, insira a senha atual e a nova senha.');
    }
  }
   // Método para verificar o status inicial do GPS
   async verificarGPS() {
    try {
      const permStatus = await Geolocation.checkPermissions();
      this.gpsAtivado = permStatus.location === 'granted';
    } catch (error) {
      console.error('Erro ao verificar o status do GPS:', error);
    }
  }

  // Método para ativar/desativar o GPS
  async toggleGPS() {
    if (this.gpsAtivado) {
      // Lógica para ativar o GPS
      await Geolocation.requestPermissions();
    } else {
    
    }
  }
}
