import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BrandStoryComponent } from './brand-story.component';
import { ProductMaterialsComponent } from './product-materials/product-materials.component';
import { ProductProcessingComponent } from './product-processing/product-processing.component';
import { brandStoryRoutes } from './brand-story.routes';
import { InfoNutritionComponent } from './info-nutrition/info-nutrition.component';
import { ProcessingEggsComponent } from './product-processing/processing-eggs/processing-eggs.component';
import { ProcessingMixtureComponent } from './product-processing/processing-mixture/processing-mixture.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(brandStoryRoutes),
  ],
  // tslint:disable-next-line:max-line-length
  declarations: [BrandStoryComponent, ProductMaterialsComponent, ProductProcessingComponent, InfoNutritionComponent, ProcessingEggsComponent, ProcessingMixtureComponent]
})
export class BrandStoryModule { }
