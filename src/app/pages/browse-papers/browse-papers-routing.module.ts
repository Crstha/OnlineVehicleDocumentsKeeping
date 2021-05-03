import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowsePapersPage } from './browse-papers.page';

const routes: Routes = [
  {
    path: '',
    component: BrowsePapersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowsePapersPageRoutingModule {}
