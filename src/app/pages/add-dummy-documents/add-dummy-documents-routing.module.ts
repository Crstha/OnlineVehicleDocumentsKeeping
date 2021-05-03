import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDummyDocumentsPage } from './add-dummy-documents.page';

const routes: Routes = [
  {
    path: '',
    component: AddDummyDocumentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDummyDocumentsPageRoutingModule {}
