import { Component, OnInit, ɵConsole } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { defaultUser } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;  

  constructor(private authservice: AuthService, public router: Router) {
  }

  onAccesoRapidoAccess( userSelected: Object )
  {
      this.email = userSelected.email;
      this.password = userSelected.password;
  }

  ngOnInit() {
  }

  OnSubmitLogin() {
    this.authservice.login(this.email, this.password).then(res => {
          this.router.navigate(['/home']);
    }).catch(err => alert('Los Datos son Incorrectos'));
  }
}
