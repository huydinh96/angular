import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { appRoutes } from './app.routes';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PolicySecurityComponent } from './policy-security/policy-security.component';
import { MapComponent } from './map/map.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { AuthService } from './providers/auth.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ToastrModule } from 'ngx-toastr';
import { BrandStoryComponent } from './brand-story/brand-story.component';
import { InfoNutritionComponent } from './brand-story/info-nutrition/info-nutrition.component';
import { ProductProcessingComponent } from './brand-story/product-processing/product-processing.component';
import { ProductMaterialsComponent } from './brand-story/product-materials/product-materials.component';
import { ProductShowComponent } from './brand-story/product-show/product-show.component';
import { HomeComponent } from './home/home.component';
import { SlideComponent } from './home/slide/slide.component';
import { ContentComponent } from './home/content/content.component';
import { ProductService } from './providers/product.service';
import { InStockPipe } from './Pipe/instock.pipe';
import { DetailComponent } from './detail/detail.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PolicySecurityComponent,
    MapComponent,
    NotfoundComponent,
    BrandStoryComponent,
    ProductProcessingComponent,
    InfoNutritionComponent,
    ProductMaterialsComponent,
    ProductShowComponent,
    HomeComponent,
    SlideComponent,
    ContentComponent,
    InStockPipe,
    DetailComponent,
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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    AuthService,
    ProductService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
