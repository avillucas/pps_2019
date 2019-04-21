import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {


  constructor(private AStorage: AngularFireStorage) { }

  public Upload(photoString: string) {
    const filePath = `foto-${new Date().getTime()}.jpg`;
    console.log(filePath);
    return this.AStorage.ref(filePath).putString(photoString, 'data_url');
  }

  public DataURItoImageBlob(image) {
    return this.DataURItoBlob('data:image/jpeg;base64,' + image);
  }
  
  public DataURItoBlob(dataURI) {
    let binary = atob(dataURI.split(',')[1]);
    let array = [];
    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
  }
}
