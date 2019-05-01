import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Injectable({
  providedIn: 'root'
})
export class CamaraService {

  constructor(private cameraPlugin: Camera) { }

  async  tomarFoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.cameraPlugin.DestinationType.DATA_URL,
      encodingType: this.cameraPlugin.EncodingType.JPEG,
      mediaType: this.cameraPlugin.MediaType.PICTURE,
      sourceType: this.cameraPlugin.PictureSourceType.CAMERA
    };
    //
    return await this.cameraPlugin.getPicture(options);
  }

}
