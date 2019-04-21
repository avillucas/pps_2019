import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { imageUploadTest } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StorageService {


  constructor(private AStorage: AngularFireStorage) { }

  private generadorDeId() {
    return Math.random().toString(36).substring(2);
  }

  public Upload(photoString) {
    const filePath = this.generadorDeId() + '.jpg';
    return this.AStorage.ref(filePath).put(photoString);
  }

  public test() {
    return this.DataURItoBlob(imageUploadTest);
  }

  public DataURItoImageBlob(image) {
    return this.DataURItoBlob('data:image/jpeg;base64,' + image);
  }

  public DataURItoBlob(dataURI) {
    const binary = atob(dataURI.split(',')[1]);
    const array = [];
    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
  }
}
