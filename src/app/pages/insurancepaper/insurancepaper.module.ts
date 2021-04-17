import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsurancepaperPageRoutingModule } from './insurancepaper-routing.module';

import { InsurancepaperPage } from './insurancepaper.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsurancepaperPageRoutingModule
  ],
  declarations: [InsurancepaperPage]
})
export class InsurancepaperPageModule {}
