import { Routes } from '@angular/router';

import { BrandStoryComponent } from './brand-story.component';
import { ProductMaterialsComponent } from './product-materials';
import { ProductProcessingComponent } from './product-processing';
import { InfoNutritionComponent } from './info-nutrition';
import { ProcessingEggsComponent } from './product-processing/processing-eggs/processing-eggs.component';
import { ProcessingMixtureComponent } from './product-processing/processing-mixture/processing-mixture.component';

export const brandStoryRoutes: Routes = [
    {
        path: '',
        component: BrandStoryComponent,
        children: [
            {
                path: 'materials',
                component: ProductMaterialsComponent,
            },
            {
                path: 'process', component: ProductProcessingComponent,
                children: [
                    { path: 'eggs', component: ProcessingEggsComponent },
                    { path: 'mixture', component: ProcessingMixtureComponent }
                ]
            },
            { path: 'info', component: InfoNutritionComponent }
        ]
    }
];
