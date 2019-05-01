import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { defaultUsers } from '../../../environments/environment';
import { Router } from '@angular/router';
import { Usuario } from '../../clases/usuario';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private static homePath = '/inicio';
  private static ingresoPath = '/ingreso';
  public email: string;
  public password: string;
  public usuariosDefault: Array<Usuario>;

  constructor(private authservice: AuthService, public router: Router, public menuCtrl: MenuController) {
    this.usuariosDefault = defaultUsers;
  }

  OnAccesoRapido(usuarioSeleccionado: Usuario) {
    this.email = usuarioSeleccionado.email;
    this.password = usuarioSeleccionado.password;
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
  }

  OnSubmitLogin() {
    this.authservice.login(this.email, this.password).then(res => {
      this.router.navigate([LoginPage.homePath]);
    }).catch(err => alert('Los Datos son Incorrectos'));
  }


}
