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
  foto: string;
  tareaSubida: AngularFireUploadTask;
  proceso: any;  // Observable 0 to 100

  constructor(
    private servicioFotos: FotosService,
    private activatedRoute: ActivatedRoute,
    private authservice: AuthService,
    private storage: StorageService,
    private camara: CamaraService
  ) {

  }

  carpturaFotoTerminada(event): void {
    console.log(event.url);
    const fotoUrl = event.imagenUrl;
    const data = this.authservice.traerUsuarioLogueado();
    const foto = new Foto(fotoUrl, data.email, this.esBuena);
    this.servicioFotos.crearUna(foto);
  }

  //TODO limpiar esto despues del test
  traerUsuarioLogueado() {
    const data = this.authservice.traerUsuarioLogueado();
    console.log(data);

  }

  ngOnInit() {
    this.esBuena = this.activatedRoute.snapshot.paramMap.get('buena') === '1';
    this.fotos = this.servicioFotos.traerFotos(this.esBuena);
  }

  async SubirFoto() {
    this.foto = await this.camara.tomarFoto();
    this.procesarSubida(this.foto);
  }

  private async procesarSubida(base64Image: string) {
    this.tareaSubida = this.storage.procesarSubida(base64Image);
    this.proceso = this.tareaSubida.percentageChanges();

    //TODO intentar determinar cuando termine   this.proceso.finalize(); para poder lanzar el evento emit y crear la fial 
    //TODO conseguir informacion cuando termine 
    let urlDescarga = '';
    //disparar cuando termine 
    //this.fotoTomada.emit({ imagenUrl: urlDescarga });
  }

  async Test() {
    this.foto = imageUploadTest;
    this.procesarSubida(this.foto);
  }


}
