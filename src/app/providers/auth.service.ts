import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class AuthService {
    constructor(
        public authFire: AngularFireAuth,
    ) {
    }
    registerUser(email: string, pass: string) {
        return new Promise((resolve, reject) => {
            this.authFire.auth.createUserWithEmailAndPassword(email, pass)
                .then(userData => resolve(userData),
                    err => reject(err));
        });
    }
    loginEmail(email: string, pass: string) {
        return new Promise((resolve, reject) => {
            this.authFire.auth.signInWithEmailAndPassword(email, pass)
                .then(userData => resolve(userData),
                    err => reject(err));
        });
    }
    getAuth() {
        return this.authFire.authState.map(auth => auth);
    }
    logout() {
        return this.authFire.auth.signOut();
    }
    loginGoogle() {
        return this.authFire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
    loginTwitter() {
        return this.authFire.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
    }
    loginFb() {
        return this.authFire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }
}
