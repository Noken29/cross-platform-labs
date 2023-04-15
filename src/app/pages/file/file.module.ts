import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilePageRoutingModule } from './file-routing.module';

import { FilePage } from './file.page';
import {MyHeaderComponentModule} from "../../components/my-header/my-header.component.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FilePageRoutingModule,
        MyHeaderComponentModule
    ],
  declarations: [FilePage]
})
export class FilePageModule {}
