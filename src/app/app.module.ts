import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { appRoutes } from './app.routes';
import { CommonModule } from '@angular/common';
import { ToastrService } from './providers/toastr.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoNutritionComponent } from './bran-story/info-nutrition/info-nutrition.component';
@NgModule({
  declarations: [
    AppComponent,
    InfoNutritionComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [
    ToastrService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
