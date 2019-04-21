import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Injectable({
  providedIn: 'root'
})
export class CamaraService {

  constructor(private cameraPlugin: Camera) { }

  public tomarFoto() {
    //opciones para la camara 
    const options: CameraOptions = {
      quality: 100,
      targetHeight: 200,
      targetWidth: 200,
      destinationType: this.cameraPlugin.DestinationType.DATA_URL,
      encodingType: this.cameraPlugin.EncodingType.JPEG,
      mediaType: this.cameraPlugin.MediaType.PICTURE
    };
    //
    return this.cameraPlugin.getPicture(options);
  }


}
