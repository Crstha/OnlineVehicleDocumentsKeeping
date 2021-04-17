import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BluebookPageRoutingModule } from './bluebook-routing.module';

import { BluebookPage } from './bluebook.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BluebookPageRoutingModule
  ],
  declarations: [BluebookPage]
})
export class BluebookPageModule {}
