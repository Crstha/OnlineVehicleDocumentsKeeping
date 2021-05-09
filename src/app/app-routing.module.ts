import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule),
    
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate:[AuthGuard]
  },
  { 
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'license',
    loadChildren: () => import('./pages/license/license.module').then( m => m.LicensePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule),
    // canActivate:[AuthGuard]
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'change-password',
    loadChildren: () => import('./pages/change-password/change-password.module').then( m => m.ChangePasswordPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'profile-edit',
    loadChildren: () => import('./pages/profile-edit/profile-edit.module').then( m => m.ProfileEditPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'browse-papers',
    loadChildren: () => import('./pages/browse-papers/browse-papers.module').then( m => m.BrowsePapersPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'add-documents',
    loadChildren: () => import('./pages/add-documents/add-documents.module').then( m => m.AddDocumentsPageModule),
    
  },
  {
    path: 'add-bluebook-document',
    loadChildren: () => import('./pages/add-bluebook-document/add-bluebook-document.module').then( m => m.AddBluebookDocumentPageModule),
    
  },
  {
    path: 'add-insurance-document',
    loadChildren: () => import('./pages/add-insurance-document/add-insurance-document.module').then( m => m.AddInsuranceDocumentPageModule),
   
  },





];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
