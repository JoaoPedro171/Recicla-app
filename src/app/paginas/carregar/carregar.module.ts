import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarregarPageRoutingModule } from './carregar-routing.module';

import { CarregarPage } from './carregar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarregarPageRoutingModule
  ],
  declarations: [CarregarPage]
})
export class CarregarPageModule {}
