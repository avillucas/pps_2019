import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FotoI } from '../modelos/foto.interface';
import { Foto } from '../clases/foto';

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

  traerFotos(soloBuenas: boolean) {
    return this.fotosCollection.where('buena', '==', soloBuenas);
  }


  crear(foto: FotoI): Promise<DocumentReference> {
    return this.fotosCollection.add(foto);
  }

  actualizar(foto: FotoI): Promise<void> {
    return this.fotosCollection.doc(foto.id).update({
      path: foto.path,
      creado: foto.creado,
      buena: foto.buena,
      owner: foto.owner
    });
  }

  borrar(foto: FotoI): Promise<void> {
    return this.fotosCollection.doc(id).delete();
  }
}
