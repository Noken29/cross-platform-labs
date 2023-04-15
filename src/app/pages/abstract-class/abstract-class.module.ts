import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbstractClassPageRoutingModule } from './abstract-class-routing.module';

import { AbstractClassPage } from './abstract-class.page';
import {MyHeaderComponentModule} from "../../components/my-header/my-header.component.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AbstractClassPageRoutingModule,
        MyHeaderComponentModule
    ],
  declarations: [AbstractClassPage]
})
export class AbstractClassPageModule {

}
