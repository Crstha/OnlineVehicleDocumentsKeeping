import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicencedepartmentPage } from './licencedepartment.page';

const routes: Routes = [
  {
    path: '',
    component: LicencedepartmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicencedepartmentPageRoutingModule {}
