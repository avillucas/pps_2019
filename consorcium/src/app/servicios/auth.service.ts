
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Usuario } from 'src/app/clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth) { }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user => { resolve(user); }).catch(err => reject(err));
    });
  }

  logout() {
    return this.AFauth.auth.signOut();
  }

  traerUsuarioLogueado()
  {    
    const data = this.AFauth.auth.currentUser;
    console.info(data);
    return data;
  }
}
