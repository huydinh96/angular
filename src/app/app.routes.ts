import { Routes } from '@angular/router';
export const appRoutes: Routes = [
    { path: 'brands', loadChildren: './brand-story/brand-story.module#BrandStoryModule' },
    { path: 'register', loadChildren: './register/register.module#RegisterModule', },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: '**', redirectTo: '' },
];
