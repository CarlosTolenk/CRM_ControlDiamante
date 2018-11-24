
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireDatabase, } from 'angularfire2/database';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from '../models/user';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

interface UserRole {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  role?: string;
}

@Injectable()

export class AuthService {

  authState: any = null;
  user: BehaviorSubject<User> = new BehaviorSubject(null)
  // public books: FirebaseList<any[]>;
  // private user: Observable<firebase.User>;
  // public userRole: Observable<UserRole>;

  constructor(private afAuth: AngularFireAuth, private router: Router, private db: AngularFireDatabase) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
    });
  }

  loginWithEmail(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
        let uid = this.authState.user.uid;
        // this.updateUser(user);
        let ref = this.db.object('users/' + uid).query.once('value')
          .then((dataUser) =>{
            localStorage.clear();
            console.log(dataUser.val());
            localStorage.setItem('user', JSON.stringify(dataUser.val()));
          }).catch((err)=>{
            console.log(err);
          })   
     

      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }

  createWithEmail(email: string, password: string, photoURL: string, displayName: string, role: string){
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((success) => {
        let data = {
          uid: success.user.uid,
          email: success.user.email,
          photoURL,
          displayName,
          role,
          password
        };
        console.log(success);
        console.log(data);
        const ref = this.db.object('users/' + data.uid)
          .update(data);
      }).catch(err => {
        console.log(err);       
      })

  }
 
  signOut(): void {
    this.afAuth.auth.signOut();
    // this.router.navigate(['/'])
  }

  editUser(email: string, photoURL: string, displayName: string, role: string, uid: string){
    let data = {
      uid,
      email,
      photoURL,
      displayName,
      role,
    };
    const ref = this.db.object('users/' + data.uid).update(data);
  }

  deleteUser(email, password, uid){
    console.log(email + password);
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then((info) => {
      console.log(info);
      // let user = firebase.auth().currentUser;
      info.user.delete();
      const ref = this.db.object('users/' + uid).remove();

    })
    .catch((err) => console.log(err));
  }

  recoveryPassword(email){
    return this.afAuth.auth.sendPasswordResetEmail(email)
      .then((success) => {
        console.log(success);
      })
  }

  getStatus(){
    return this.afAuth.authState;
  }




}
