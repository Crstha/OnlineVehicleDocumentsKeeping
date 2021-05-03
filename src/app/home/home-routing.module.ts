import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children:[
      {

        path:'dashboard',
        loadChildren:() => import('../pages/dashboard/dashboard.module').then( m => m.DashboardPageModule),
        canActivate:[AuthGuard]
      },
      {
        path:'license',
        loadChildren:() => import('../pages/license/license.module').then( m => m.LicensePageModule),
        canActivate:[AuthGuard]
      },
      {
        path:'settings',
        loadChildren:() => import('../pages/settings/settings.module').then( m => m.SettingsPageModule),
        canActivate:[AuthGuard]
      },
      {
        path:'browse-papers',
        loadChildren:() => import('../pages/browse-papers/browse-papers.module').then( m => m.BrowsePapersPageModule),
        canActivate:[AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
