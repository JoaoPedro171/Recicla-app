import { Component, OnInit } from '@angular/core';
import { AvisosService } from 'src/app/serviços/avisos-service.service';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.scss'],
})
export class AvisosComponent implements OnInit {
  avisos: any[] = [];

  constructor(private avisosService: AvisosService) {}

  ngOnInit() {
    
  }
}
