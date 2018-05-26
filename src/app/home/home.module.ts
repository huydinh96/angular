import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickModule } from 'ngx-slick';
import 'slick-carousel';
import { NguCarouselModule } from '@ngu/carousel';
import { SlideComponent } from './slide/slide.component';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';
@NgModule({
    imports: [
        CommonModule,
        SlickModule.forRoot(),
    ],
    declarations: [SlideComponent, ContentComponent],
    exports: [
        SlideComponent,
        ContentComponent,
    ],
})
export class HomeModule { }
