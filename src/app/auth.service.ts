import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User;

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    public fireStore: AngularFirestore
  ) {}

  login(email: string, password: string) {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response.user.uid);
        localStorage.setItem('userID', response.user.uid);
        this.router.navigate(['dashboard']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  logout() {
    this.afAuth
      .signOut()
      .then((res) => {
        console.log(res);
        this.router.navigate(['login']);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  signup(email: string, password: string, fullName: string) {
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        this.fireStore.collection('users').doc(res.user.uid).set({
          email: email,
          fullname: fullName,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
