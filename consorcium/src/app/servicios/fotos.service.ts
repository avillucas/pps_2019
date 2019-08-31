import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FotoI } from '../modelos/foto.interface';
import { Foto } from '../clases/foto';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  private fotosCollection: AngularFirestoreCollection<FotoI>;
  private fotos: Observable<FotoI[]>;

  constructor(private db: AngularFirestore) {
    this.fotosCollection = this.db.collection<FotoI>('fotos', ref => ref.orderBy('creado', 'desc'));
    this.fotos = this.fotosCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      }
    ));
  }

  get timestamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }
  

  traerFotos(soloBuenas: boolean) {
    this.fotosCollection = this.db.collection<FotoI>('fotos', ref => ref.where('buena', '==', soloBuenas).orderBy('creado', 'desc'));
    this.fotos = this.fotosCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      }
    ));
    return this.fotos;

  }


  crear(foto: FotoI): Promise<DocumentReference> {
    const creado = this.timestamp;
    foto.creado = creado;
    return this.fotosCollection.add(foto);
  }

  actualizar(foto: FotoI): Promise<void> {
    return this.fotosCollection.doc(foto.id).update({
      path: foto.path,
      buena: foto.buena,
      owner: foto.owner
    });
  }

  //TODO testear
  borrar(foto: FotoI): Promise<void> {
    return this.fotosCollection.doc(foto.id).delete();
  }
}
