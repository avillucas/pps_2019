import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CamaraService } from '../../servicios/camara.service';
import { StorageService } from '../../servicios/storage.service';
import { imageUploadTest } from '../../../environments/environment';
import { AngularFireUploadTask } from '@angular/fire/storage';

@Component({
  selector: 'app-camaraupload',
  templateUrl: './camaraupload.component.html',
  styleUrls: ['./camaraupload.component.scss'],
})
export class CamarauploadComponent implements OnInit {

  foto: string;
  tareaSubida: AngularFireUploadTask;
  proceso: any;  // Observable 0 to 100

  @Output() fotoTomada = new EventEmitter();

  constructor(private storage: StorageService, private camara: CamaraService) { }
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

  ngOnInit() { }

}
