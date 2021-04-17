import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children:[
      {

        path:'dashboard',
        loadChildren:() => import('../pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path:'license',
        loadChildren:() => import('../pages/license/license.module').then( m => m.LicensePageModule)
      },
      {
        path:'bluebook',
        loadChildren:() => import('../pages/bluebook/bluebook.module').then( m => m.BluebookPageModule)
      },
      {
        path:'insurancepaper',
        loadChildren:() => import('../pages/insurancepaper/insurancepaper.module').then( m => m.InsurancepaperPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
