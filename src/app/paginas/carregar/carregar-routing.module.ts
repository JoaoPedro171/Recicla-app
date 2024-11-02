import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarregarPage } from './carregar.page';

const routes: Routes = [
  {
    path: '',
    component: CarregarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarregarPageRoutingModule {}
