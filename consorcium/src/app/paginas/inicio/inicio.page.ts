import { Component, OnInit } from '@angular/core';
import { MenuController, LoadingController } from '@ionic/angular';
import { CamaraService } from '../../servicios/camara.service';
import { StorageService } from '../../servicios/storage.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {

  public selectedPhoto;
  public currentImage;
  public mostrarSubirFoto: boolean;
  public loading;

  constructor(
    public menuCtrl: MenuController,
    private Camara: CamaraService,
    private loadingCtrl: LoadingController,
    private storage: StorageService
  ) {
    this.mostrarSubirFoto = false;
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  public Volver() {
    this.currentImage = '';
    this.mostrarSubirFoto = false;
    this.selectedPhoto = '';
  }

  public SubirFoto() {
    this.Camara.tomarFoto().then((imagen) => {
      console.log(imagen);
      //   this.loading = this.loadingCtrl.create();
      //  this.loading.present();
      this.selectedPhoto = this.storage.DataURItoImageBlob(imagen);
      this.storage.Upload(this.selectedPhoto).then(this.onSuccess, this.onError);
    }, (err) => {
      console.log('error', err);
    });
  }

  onSuccess(snapshot) {
    console.log(snapshot);
  //  this.currentImage = snapshot.downloadURL;
    //  this.loading.dismiss();
  }

  onError(error) {
    console.log("error", error);
    //   this.loading.dismiss();
  }

  private Test() {
    this.selectedPhoto = this.storage.test();
    this.storage.Upload(this.selectedPhoto).then(this.onSuccess).catch(this.onError);
  }

  public subirFotoBuena() {
    this.Test();
    this.mostrarSubirFoto = true;
    console.info('buena');
  }
  public subirFotoMala() {
    this.mostrarSubirFoto = true;
    console.info('mala');
  }
}
