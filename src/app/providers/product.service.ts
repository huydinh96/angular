import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/operator/map';
@Injectable()
export class ProductService {
    private apiUrl = 'http://5b07883c92b3b4001425a092.mockapi.io/api/product/';
    constructor(private _http: Http) {

    }
    GetProduct(): Observable<any[]> {
        return this._http.get(this.apiUrl).map((reponse: Response) => reponse.json());
    }
    GetSingle(): Observable<any> {
        return this._http.get(this.apiUrl + 'id=').map((reponse: Response) => reponse.json());
    }
}
