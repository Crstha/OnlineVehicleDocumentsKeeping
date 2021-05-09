import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddInsuranceDocumentPageRoutingModule } from './add-insurance-document-routing.module';

import { AddInsuranceDocumentPage } from './add-insurance-document.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddInsuranceDocumentPageRoutingModule
  ],
  declarations: [AddInsuranceDocumentPage]
})
export class AddInsuranceDocumentPageModule {}
