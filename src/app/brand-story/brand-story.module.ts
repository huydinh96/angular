import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BrandStoryComponent } from './brand-story.component';
import { ProductMaterialsComponent } from './product-materials/product-materials.component';
import { ProductProcessingComponent } from './product-processing/product-processing.component';
import { brandStoryRoutes } from './brand-story.routes';
import { InfoNutritionComponent } from './info-nutrition/info-nutrition.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(brandStoryRoutes),
  ],
  declarations: [BrandStoryComponent, ProductMaterialsComponent, ProductProcessingComponent, InfoNutritionComponent]
})
export class BrandStoryModule { }
