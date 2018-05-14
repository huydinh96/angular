import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RegisterService {
    constructor() { }
    public register(form: any) {
        return new Observable((subscribe) => {
            setTimeout(() => {
                if (form.email === 'aa@gmail.com') {
                    subscribe.error({ detail: { email: 'Đã bị trùng' } });
                } else {
                    subscribe.next(form);
                    subscribe.complete();
                }
            }, 2000);
        });
    }
}
