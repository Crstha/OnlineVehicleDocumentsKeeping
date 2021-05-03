import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDummyDocumentsPageRoutingModule } from './add-dummy-documents-routing.module';


import { AddDummyDocumentsPage } from './add-dummy-documents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDummyDocumentsPageRoutingModule
  ],
  declarations: [AddDummyDocumentsPage]
})
export class AddDummyDocumentsPageModule {}
