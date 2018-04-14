import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

export interface Item { name: string; }

@Injectable()
export class ConexionService {

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  private itemDoc: AngularFirestoreDocument<Item>;

  constructor(private afs:AngularFirestore) { 
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  listaItems(){
    return this.items;
  }

  addItem(item: Item) {
    this.itemsCollection.add(item);
  }

  deleteItem(item){
    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);
    this.itemDoc.delete();
  }
}
