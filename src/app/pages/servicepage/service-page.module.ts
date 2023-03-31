import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicePageRoutingModule } from './service-page-routing.module';

import { ServicePage } from './service-page.component';
import {InterfacepagePageModule} from "../interfacepage/interfacepage.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicePageRoutingModule,
    InterfacepagePageModule
  ],
  declarations: [ServicePage]
})
export class ServicePageModule {}
