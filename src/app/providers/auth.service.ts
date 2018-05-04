// import { Injectable } from '@angular/core';

// import { Observable } from 'rxjs/Observable';
// import { tap, delay } from 'rxjs/operators';
// import 'rxjs/add/observable/of';
// @Injectable()
// export class AuthService {
//     isLoggedIn = false;
//     redirecUrl: string;
//     login(): Observable<boolean> {
//         return of(true).pipe(
//             delay(1000),
//             tap(val => this.isLoggedIn = true)
//         );
//     }
//     logout(): void {
//         this.isLoggedIn = false;
//     }
// }