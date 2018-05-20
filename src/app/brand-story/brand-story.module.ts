import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BrandStoryComponent } from './brand-story.component';
import { ProductMaterialsComponent } from './product-materials/product-materials.component';
import { ProductProcessingComponent } from './product-processing/product-processing.component';
import { brandStoryRoutes } from './brand-story.routes';
import { InfoNutritionComponent } from './info-nutrition/info-nutrition.component';
import { ProductShowComponent } from './product-show/product-show.component';
import { MaterialComponent } from './material/material.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(brandStoryRoutes),
  ],
  // tslint:disable-next-line:max-line-length
  declarations: [BrandStoryComponent, ProductMaterialsComponent, ProductProcessingComponent, InfoNutritionComponent, ProductShowComponent, MaterialComponent, ]
})
export class BrandStoryModule { }
