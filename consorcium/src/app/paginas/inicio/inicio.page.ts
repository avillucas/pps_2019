import { firebaseConfig } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { MenuController, LoadingController } from '@ionic/angular';
import { CamaraService } from '../../servicios/camara.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public mostrarSubirFoto: boolean;
  public selectedPhoto;
  public loading;
  public currentImage;

  constructor(public menuCtrl: MenuController, private Camara: CamaraService, private loadingCtrl: LoadingController) {
    this.mostrarSubirFoto = false;
    //firebase.initializeApp(firebaseConfig);
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  public subirFoto() {
    this.Camara.tomarFoto().then((imagen) => {
      this.loading = this.loadingCtrl.create();
      this.loading.present();
      this.selectedPhoto = this.dataURItoBlob('data:image/jpeg;base64,' + imagen);
      this.upload();
    }, (err) => {
      console.log('error', err);
    })
  }

  dataURItoBlob(dataURI) {
    let binary = atob(dataURI.split(',')[1]);
    let array = [];
    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
  };

  upload() {
    if (this.selectedPhoto) {
      //var uploadTask = firebase.storage().ref().child('images/uploaded.png').put(this.selectedPhoto).then(this.onSuccess, this.onError);
    }
  }

  onSuccess = snapshot => {
    this.currentImage = snapshot.downloadURL;
    this.loading.dismiss();
  };

  onError = error => {
    console.log("error", error);
    this.loading.dismiss();
  };

  public subirFotoBuena() {
    this.mostrarSubirFoto = true;
    console.info('buena');
  }
  public subirFotoMala() {
    this.mostrarSubirFoto = true;
    console.info('mala');
  }
}
