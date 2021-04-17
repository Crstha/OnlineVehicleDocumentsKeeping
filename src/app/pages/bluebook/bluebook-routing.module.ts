import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BluebookPage } from './bluebook.page';

const routes: Routes = [
  {
    path: '',
    component: BluebookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BluebookPageRoutingModule {}
