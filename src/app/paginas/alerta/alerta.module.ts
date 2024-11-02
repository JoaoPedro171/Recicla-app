import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertaPageRoutingModule } from './alerta-routing.module';

import { AlertaPage } from './alerta.page';
import { localizacaoComponent } from 'src/app/componentes/localizacao/localizacao.component';
localizacaoComponent

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertaPageRoutingModule
  ],
  declarations: [
    AlertaPage,
    localizacaoComponent
  ]
})
export class AlertaPageModule {}
