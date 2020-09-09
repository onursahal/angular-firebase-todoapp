import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersCollection: AngularFirestoreCollection<any>;
  user: Observable<any>;
  id: string = 'DXj3KSL3YPXfDJmf1LxgHEA8Lio2';

  constructor(public firestore: AngularFirestore) {
    this.usersCollection = firestore.collection('users');
    this.user = this.usersCollection.doc(this.id).valueChanges();
  }

  getUser() {
    this.firestore.collection('users').snapshotChanges();
  }
}
