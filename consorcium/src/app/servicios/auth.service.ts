
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Usuario } from 'src/app/clases/usuario';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  autenticadoEstado: any = null;

  constructor(private AFauth: AngularFireAuth) {
    this.AFauth.authState.subscribe((auth) => {
      this.autenticadoEstado = auth
    });
  }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user => { resolve(user); }).catch(err => reject(err));
    });
  }

  logout() {
    return this.AFauth.auth.signOut();
  }

  get autenticado(): boolean {
    return this.autenticadoEstado !== null;
  }

  // Returns current user data
  get currentUser(): any {
    return this.autenticado ? this.autenticadoEstado : null;
  }

  // Returns
  get usuarioActualObservable(): any {
    return this.AFauth.authState;
  }

  get usuarioActualId(): string {
    return this.autenticado ? this.autenticadoEstado.uid : '';
  }

  get usuarioActualEmail(): string {
    return this.autenticado ? this.autenticadoEstado.email : '';
  }
}
