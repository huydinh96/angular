import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
// import { tap, delay } from 'rxjs/operators';
// import 'rxjs/add/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class AuthService {
    isLoggedIn = false;
    redirecUrl: string;
    public Login() {
        return new Observable(subscribe => {
            setTimeout(() => {
                this.isLoggedIn = true;
                subscribe.next(this.isLoggedIn);
                subscribe.complete();
            }, 0);
        });
    }
}
