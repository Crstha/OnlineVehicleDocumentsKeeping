import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsurancepaperPage } from './insurancepaper.page';

const routes: Routes = [
  {
    path: '',
    component: InsurancepaperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsurancepaperPageRoutingModule {}
