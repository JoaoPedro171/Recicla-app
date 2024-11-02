import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localizacao',
  templateUrl: './localizacao.component.html',
  styleUrls: ['./localizacao.component.scss'],
})
export class localizacaoComponent implements OnInit {
  currentLocation: string = 'Obtendo localização...';

  ngOnInit() {
    this.getUserLocation();
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          this.currentLocation = `Lat: ${latitude.toFixed(4)}, Lng: ${longitude.toFixed(4)}`;
        },
        (error) => {
          console.error('Erro ao obter localização:', error);
          this.currentLocation = 'Localização não disponível';
        }
      );
    } else {
      this.currentLocation = 'Geolocalização não suportada';
    }
  }
}
