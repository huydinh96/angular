import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-confirm',
    template: `
    <button mat-button [matMenuTriggerFor]="menu">Tìm hiểu aji-mayo</button>
    <mat-menu #menu="matMenu">
    <button mat-menu-item>Tìm hiểu sản phẩm</button>
    <button mat-menu-item>Về aji-mayo</button>
    `
})
export class ConfirmComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}
