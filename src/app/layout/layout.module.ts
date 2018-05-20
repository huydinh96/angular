import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmComponent } from './menu/confirm.component';
import { AuthService } from '../providers/auth.service';
import { SliderComponent } from './slider/slider.component';
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
  ],
  declarations: [MenuComponent, FooterComponent, ConfirmComponent, SliderComponent],
  exports: [
    MenuComponent,
    FooterComponent,
    ConfirmComponent,
    SliderComponent,
  ],
  entryComponents: [
    ConfirmComponent,
  ],
  providers: [AuthService],
})
export class LayoutModule { }
