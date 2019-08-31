import { Component, OnInit } from '@angular/core';
import { FotosService } from '../../servicios/fotos.service';
import { Observable } from 'rxjs';
import { FotoI } from '../../modelos/foto.interface';
import { ActivatedRoute } from '@angular/router';
import { Foto } from '../../clases/foto';
import { AuthService } from '../../servicios/auth.service';
import { CamaraService } from '../../servicios/camara.service';
import { StorageService } from '../../servicios/storage.service';
import { imageUploadTest } from '../../../environments/environment';
import { AngularFireUploadTask } from '@angular/fire/storage';
import * as firebase from 'firebase/app';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  //Si esta entrando como buena o no 
  private esBuena = false;
  //fotos de la lista
  public fotos: Observable<FotoI[]>;
  tareaSubida: AngularFireUploadTask;
  proceso: any;  // Observable 0 to 100
  loading :any; // lleva el loading
  
  constructor(
    private servicioFotos: FotosService,
    private activatedRoute: ActivatedRoute,
    private authservice: AuthService,
    private storage: StorageService,
    private camara: CamaraService,
    public loadingCtrl: LoadingController
  ) {

  }

  carpturaFotoTerminada(event): void {
    console.log(event.url);
    const fotoUrl = event.imagenUrl;
    const emailUsuario = this.authservice.usuarioActualEmail;
    const foto = new Foto(fotoUrl, emailUsuario, this.esBuena);
    this.servicioFotos.crear(foto);
  }

  //TODO limpiar esto despues del test
  traerUsuarioLogueado() {
    const email = this.authservice.usuarioActualEmail;
    console.log(email);

  }

  ngOnInit() {
    this.esBuena = this.activatedRoute.snapshot.paramMap.get('buena') === '1';
    this.fotos = this.servicioFotos.traerFotos(this.esBuena);
  }

  async SubirFoto() {
    const foto = await this.camara.tomarFoto();
    this.procesarSubida(foto);
  }

  private async procesarSubida(base64Image: string) {
    this.tareaSubida = this.storage.procesarSubida(base64Image);
    this.proceso = this.tareaSubida.percentageChanges();
    /**
    this.tareaSubida.snapshotChanges(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot)=>{console.log()},
      (error)=>{console.log()},
      ()=>{
        this.capturarFotoTermina(snapshot.downloadLink);
        console.log('finish')},
      );

    **/
  }

  async Test() {
    this.procesarSubida(imageUploadTest);
  }


}
