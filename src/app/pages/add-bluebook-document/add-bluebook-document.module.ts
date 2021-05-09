import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBluebookDocumentPageRoutingModule } from './add-bluebook-document-routing.module';

import { AddBluebookDocumentPage } from './add-bluebook-document.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddBluebookDocumentPageRoutingModule
  ],
  declarations: [AddBluebookDocumentPage]
})
export class AddBluebookDocumentPageModule {}
