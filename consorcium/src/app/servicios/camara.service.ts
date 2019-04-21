import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Injectable({
  providedIn: 'root'
})
export class CamaraService {

  constructor(private cameraPlugin: Camera) { }

  public tomarFoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.cameraPlugin.DestinationType.FILE_URI,
      encodingType: this.cameraPlugin.EncodingType.JPEG,
      mediaType: this.cameraPlugin.MediaType.PICTURE
    };
    //
    return this.cameraPlugin.getPicture(options);
  }


}
