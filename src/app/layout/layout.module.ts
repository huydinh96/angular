import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from '../providers/auth.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  declarations: [MenuComponent, FooterComponent],
  exports: [
    MenuComponent,
    FooterComponent,
  ],
  entryComponents: [
  ],
  providers: [AuthService],
})
export class LayoutModule { }
