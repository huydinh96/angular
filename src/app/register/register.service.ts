import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RegisterService {
    constructor() { }
    public register(form: any) {
        return new Observable((subscribe) => {
            setTimeout(
                () => {
                    if (form.email === 'aa@gmail.com') {
                        subscribe.error({
                            detail: {
                                email:
                                    'da bi trung'
                            }
                        });
                    } else {
                        subscribe.next(form);
                        subscribe.complete();
                    }
                }
            );
        });
    }
}
