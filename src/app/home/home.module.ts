import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickModule } from 'ngx-slick';
import 'slick-carousel';
import { NguCarouselModule } from '@ngu/carousel';
import { SlideComponent } from './slide/slide.component';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
@NgModule({
    imports: [
        CommonModule,
        SlickModule.forRoot(),
    ],
    declarations: [SlideComponent, ContentComponent, DetailComponent],
    exports: [
        SlideComponent,
        ContentComponent,
        DetailComponent
    ],
})
export class HomeModule { }
