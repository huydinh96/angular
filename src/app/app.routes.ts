import { Routes } from '@angular/router';
import { PolicySecurityComponent } from './policy-security/policy-security.component';
import { MapComponent } from './map/map.component';
export const appRoutes: Routes = [
    { path: 'brands', loadChildren: './brand-story/brand-story.module#BrandStoryModule' },
    { path: 'register', loadChildren: './register/register.module#RegisterModule' },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'bao-mat', component: PolicySecurityComponent },
    { path: 'so-do', component: MapComponent },
    { path: '**', redirectTo: '' },
];
