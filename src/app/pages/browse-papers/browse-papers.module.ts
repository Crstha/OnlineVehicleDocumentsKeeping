import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowsePapersPageRoutingModule } from './browse-papers-routing.module';

import { BrowsePapersPage } from './browse-papers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowsePapersPageRoutingModule
  ],
  declarations: [BrowsePapersPage]
})
export class BrowsePapersPageModule {}
