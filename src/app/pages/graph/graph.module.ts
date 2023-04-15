import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraphPageRoutingModule } from './graph-routing.module';

import { GraphPage } from './graph.page';
import {MyHeaderComponentModule} from "../../components/my-header/my-header.component.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GraphPageRoutingModule,
        MyHeaderComponentModule
    ],
  declarations: [GraphPage]
})
export class GraphPageModule {}
