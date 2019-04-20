import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  // { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: '', loadChildren: './paginas/login/login.module#LoginPageModule' },
  { path: 'inicio', loadChildren: './paginas/inicio/inicio.module#InicioPageModule' },
  { path: 'lista', loadChildren: './paginas/lista/lista.module#ListaPageModule' },
  { path: 'votacion', loadChildren: './paginas/votacion/votacion.module#VotacionPageModule' },
  { path: '**', loadChildren: './paginas/error/error.module#ErrorPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
