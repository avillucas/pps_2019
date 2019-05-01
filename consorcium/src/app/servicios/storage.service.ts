import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { imageUploadTest } from '../../environments/environment';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: AngularFireStorage) { }

  task: AngularFireUploadTask;
  image: string; // base64

  private generadorDeId() {
    return Math.random().toString(36).substring(2);
  }

  procesarSubida(fileBase64String: string): AngularFireUploadTask {
    const filePath = 'foto-' + this.generadorDeId() + '.jpg';
    this.image = 'data:image/jpg;base64,' + fileBase64String;
    this.task = this.storage.ref(filePath).putString(this.image, 'data_url');
    return this.task;
  }
}
