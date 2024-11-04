import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-carregar',
  templateUrl: './carregar.page.html',
  styleUrls: ['./carregar.page.scss'],
})
export class CarregarPage {
  @ViewChild('map', { static: false }) mapElement!: ElementRef;
  map: google.maps.Map | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadMap();
  }

  configuracao() {
    this.router.navigate(['/configuracao']);
  }

  alerta() {
    this.router.navigate(['/alerta']);
  }

  lista() {
    this.router.navigate(['/lista']);
  }

  loadMap() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDoFXDR_S2gRtyEu9ShA0uWiLQTyviXyjc&callback=initMap`;
    script.async = true;
    script.defer = true;
    
    (window as any).initMap = this.initMap.bind(this);

    document.body.appendChild(script);
  }

  initMap() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          this.map = new google.maps.Map(this.mapElement.nativeElement, {
            center: location,
            zoom: 18,
          });

          new google.maps.Marker({
            position: location,
            map: this.map,
            title: 'Minha Localização!',
          });
        },
        () => {
          this.handleLocationError(true);
        }
      );
    } else {
      this.handleLocationError(false);
    }
  }

  handleLocationError(browserHasGeolocation: boolean) {
    const location = { lat: -23.55052, lng: -46.633308 }; // Coordenadas de fallback (São Paulo)
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      center: location,
      zoom: 12,
    });

    new google.maps.Marker({
      position: location,
      map: this.map,
      title: browserHasGeolocation
        ? 'Erro ao obter localização.'
        : 'Geolocalização não suportada.',
    });
  }

  centerMapOnUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          this.map?.setCenter(location);
          
        },
        (error) => {
          console.error('Erro ao obter a localização do usuário:', error);
        }
      );
    } else {
      console.error('Geolocalização não é suportada neste navegador.');
    }
  }
}
