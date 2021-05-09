import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBluebookDocumentPage } from './add-bluebook-document.page';

const routes: Routes = [
  {
    path: '',
    component: AddBluebookDocumentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddBluebookDocumentPageRoutingModule {}
