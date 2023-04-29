import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReactiveFormPageRoutingModule } from './reactive-form-routing.module';

import { ReactiveFormPage } from './reactive-form.page';
import {MyHeaderComponentModule} from "../../components/my-header/my-header.component.module";
import {MagazineFormComponentModule} from "../../components/magazine-form/magazine-form.component.module";
import {UpdateFormComponent} from "../../components/update-form/update-form.component";
import {ViewFormComponent} from "../../components/viewform/view-form.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormPageRoutingModule,
    MyHeaderComponentModule,
    MagazineFormComponentModule
  ],
    declarations: [ReactiveFormPage, UpdateFormComponent, ViewFormComponent]
})
export class ReactiveFormPageModule {}
