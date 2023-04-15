import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {MagazineFormComponent} from "./magazine-form.component";
import {IonicModule} from '@ionic/angular';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        ReactiveFormsModule
    ],
  declarations: [
    MagazineFormComponent
  ],
  exports: [
    MagazineFormComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MagazineFormComponentModule {}
