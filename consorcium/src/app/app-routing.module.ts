import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { UnauthGuard } from './guards/unauth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'ingreso', pathMatch: 'full' },
  { path: 'ingreso', loadChildren: './paginas/login/login.module#LoginPageModule', canActivate: [UnauthGuard] },
  { path: 'inicio', loadChildren: './paginas/inicio/inicio.module#InicioPageModule', canActivate: [AuthGuard] },
  { path: 'lista/:buena', loadChildren: './paginas/lista/lista.module#ListaPageModule', canActivate: [AuthGuard] },
  { path: 'votacion', loadChildren: './paginas/votacion/votacion.module#VotacionPageModule', canActivate: [AuthGuard] },
  { path: '**', loadChildren: './paginas/error/error.module#ErrorPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
