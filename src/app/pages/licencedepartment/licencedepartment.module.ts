import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LicencedepartmentPageRoutingModule } from './licencedepartment-routing.module';

import { LicencedepartmentPage } from './licencedepartment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LicencedepartmentPageRoutingModule
  ],
  declarations: [LicencedepartmentPage]
})
export class LicencedepartmentPageModule {}
