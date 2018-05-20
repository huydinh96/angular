import { Routes } from '@angular/router';
import { PolicySecurityComponent } from './policy-security/policy-security.component';
import { MapComponent } from './map/map.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductProcessingComponent } from './brand-story/product-processing/product-processing.component';
import { BrandStoryComponent } from './brand-story/brand-story.component';
import { InfoNutritionComponent } from './brand-story/info-nutrition/info-nutrition.component';
import { ProductMaterialsComponent } from './brand-story/product-materials/product-materials.component';
import { ProductShowComponent } from './brand-story/product-show/product-show.component';
export const appRoutes: Routes = [
    {
        path: 'brands',
        component: BrandStoryComponent,
        children: [
            {path: 'process', component: ProductProcessingComponent},
            {path: 'info', component: InfoNutritionComponent},
            {path: 'material', component: ProductMaterialsComponent},
            {path: 'product', component: ProductShowComponent},
        ]

    },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'bao-mat', component: PolicySecurityComponent },
    { path: 'so-do', component: MapComponent },
    { path: 'process', component: ProductProcessingComponent },
    { path: '**', redirectTo: '' },
];
