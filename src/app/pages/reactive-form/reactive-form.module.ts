import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReactiveFormPageRoutingModule } from './reactive-form-routing.module';

import { ReactiveFormPage } from './reactive-form.page';
import {MyHeaderComponentModule} from "../../components/my-header/my-header.component.module";
import {MagazineFormComponentModule} from "../../components/magazine-form/magazine-form.component.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormPageRoutingModule,
    MyHeaderComponentModule,
    MagazineFormComponentModule
  ],
  declarations: [ReactiveFormPage]
})
export class ReactiveFormPageModule {}
