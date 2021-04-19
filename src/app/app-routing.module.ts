import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'license',
    loadChildren: () => import('./pages/license/license.module').then( m => m.LicensePageModule)
  },
  {
    path: 'insurancepaper',
    loadChildren: () => import('./pages/insurancepaper/insurancepaper.module').then( m => m.InsurancepaperPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'licencedepartment',
    loadChildren: () => import('./pages/licencedepartment/licencedepartment.module').then( m => m.LicencedepartmentPageModule)
  },
  {
    path: 'browse',
    loadChildren: () => import('./pages/browse/browse.module').then( m => m.BrowsePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
