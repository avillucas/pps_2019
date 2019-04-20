import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { defaultUsers } from '../../../environments/environment';
import { Router } from '@angular/router';
import { Usuario } from '../../clases/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email: string;
  public password: string;
  public usuariosDefault: Array<Usuario>;

  constructor(private authservice: AuthService, public router: Router) {
    this.usuariosDefault = defaultUsers;
  }

  OnAccesoRapido(usuarioSeleccionado: Usuario) {
    this.email = usuarioSeleccionado.email;
    this.password = usuarioSeleccionado.password;
  }

  ngOnInit() {
  }

  OnSubmitLogin() {
    this.authservice.login(this.email, this.password).then(res => {
      this.router.navigate(['/inicio']);
    }).catch(err => alert('Los Datos son Incorrectos'));
  }

  public cerrarSesion() {
    this.authservice.logout().then(res => {
      this.router.navigate(['/ingreso']);
    }).catch(err => alert('Error al cerrar sesion'));
  }
}
