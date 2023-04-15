import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterfacepagePageRoutingModule } from './interfacepage-routing.module';

import { InterfacepagePage } from './interfacepage.page';
import {MyHeaderComponentModule} from "../../components/my-header/my-header.component.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterfacepagePageRoutingModule,
    MyHeaderComponentModule
  ],
  declarations: [InterfacepagePage]
})
export class InterfacepagePageModule {}
