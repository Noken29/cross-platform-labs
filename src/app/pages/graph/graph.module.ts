import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraphPageRoutingModule } from './graph-routing.module';

import { GraphPage } from './graph.page';
import {InterfacepagePageModule} from "../interfacepage/interfacepage.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GraphPageRoutingModule,
        InterfacepagePageModule
    ],
  declarations: [GraphPage]
})
export class GraphPageModule {}
