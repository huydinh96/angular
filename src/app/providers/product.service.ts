import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from 'constants';
@Injectable()
export class ProductService {
    private apiUrl = 'http://5b07883c92b3b4001425a092.mockapi.io/api/product/';
    // private dathang = new BehaviorSubject([]);
    constructor(private _http: Http) {

    }
    GetProduct(): Observable<any[]> {
        return this._http.get(this.apiUrl).map((reponse: Response) => reponse.json());
    }
    GetSingle(): Observable<any> {
        return this._http.get(this.apiUrl + 'id=').map((reponse: Response) => reponse.json());
    }
    Search(keyword: string): Observable<any[]> {
        return this._http.get(this.apiUrl + '?search=' + keyword).map((response: Response) => response.json());
    }
    // public getDatHang() {
    //     return this.dathang.asObservable();
    // }
    // public addThemVaoGioHang(sanpham: any) {
    //     const danhsachSanpham = this.dathang.getValue();
    //     danhsachSanpham.push(sanpham);
    //     this.dathang.next(danhsachSanpham);
    // }
}
