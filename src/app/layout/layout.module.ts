import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmComponent } from './menu/confirm.component';
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
  ],
  declarations: [MenuComponent, FooterComponent, ConfirmComponent],
  exports: [
    MenuComponent,
    FooterComponent,
  ],
  entryComponents: [
    ConfirmComponent,
  ],
})
export class LayoutModule { }
