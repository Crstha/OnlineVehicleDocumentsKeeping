import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddInsuranceDocumentPage } from './add-insurance-document.page';

const routes: Routes = [
  {
    path: '',
    component: AddInsuranceDocumentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddInsuranceDocumentPageRoutingModule {}
