import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {MyHeaderComponent} from "./my-header.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    MyHeaderComponent
  ],
  exports: [
    MyHeaderComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MyHeaderComponentModule {}
