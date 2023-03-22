import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilePageRoutingModule } from './file-routing.module';

import { FilePage } from './file.page';
import {InterfacepagePageModule} from "../interfacepage/interfacepage.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FilePageRoutingModule,
        InterfacepagePageModule
    ],
  declarations: [FilePage]
})
export class FilePageModule {}
