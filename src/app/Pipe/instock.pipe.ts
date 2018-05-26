import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'instock',
    pure: true,
})
export class InStockPipe implements PipeTransform {
    transform(value: Boolean) {
        return value ? 'Còn Hàng' : 'Hết Hàng';
    }
}
