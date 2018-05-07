import { Routes } from '@angular/router';

import { BrandStoryComponent } from './brand-story.component';
import { ProductMaterialsComponent } from './product-materials';
import { ProductProcessingComponent } from './product-processing';
import { InfoNutritionComponent } from './info-nutrition';

export const brandStoryRoutes: Routes = [
    {
        path: '',
        component: BrandStoryComponent,
        children: [
            { path: 'materials', component: ProductMaterialsComponent },
            { path: 'process', component: ProductProcessingComponent },
            { path: 'info', component: InfoNutritionComponent }
        ]
    }
];
