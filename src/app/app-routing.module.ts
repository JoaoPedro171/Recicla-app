import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'carregar',
    loadChildren: () => import('./paginas/carregar/carregar.module').then( m => m.CarregarPageModule)
  },
  {
    path: 'alerta',
    loadChildren: () => import('./paginas/alerta/alerta.module').then( m => m.AlertaPageModule)
  },
  {
    path: 'lista',
    loadChildren: () => import('./paginas/lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'configuracao',
    loadChildren: () => import('./paginas/configuracao/configuracao.module').then( m => m.ConfiguracaoPageModule)
  },
  {
    path: 'conta',
    loadChildren: () => import('./paginas/conta/conta.module').then( m => m.ContaPageModule)
  },
  {
    path: 'seguranca',
    loadChildren: () => import('./paginas/seguranca/seguranca.module').then( m => m.SegurancaPageModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./paginas/usuario/usuario.module').then( m => m.UsuarioPageModule)
  },
  {
    path: 'ajuda',
    loadChildren: () => import('./paginas/ajuda/ajuda.module').then( m => m.AjudaPageModule)
  },
  {
    path: 'senha',
    loadChildren: () => import('./paginas/senha/senha.module').then( m => m.SenhaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
