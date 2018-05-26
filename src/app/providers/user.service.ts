import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interface/user';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';
const httpOption = {
    headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
@Injectable()
export class UserService {
    private user = new BehaviorSubject([]);
    public userUrl = 'http://5b099717a991440014aaff9f.mockapi.io/api/User';
    constructor(private _http: Http) {
    }
    // post infoUser to API
    postUser(infoUser: User): Observable<User> {
        return this._http.post<User>(this.userUrl, infoUser, httpOption);
    }
    // get from api to local
    getUserApi(): any {
        return this._http.get(this.userUrl);
    }
    getUser(): any {
        return this.user.asObservable();
    }
    _user(user: any) {
        console.log(user);
        return this.user.next(user);
    }
}
