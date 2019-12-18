import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntranceFailPageRoutingModule } from './entrance-fail-routing.module';

import { EntranceFailPage } from './entrance-fail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntranceFailPageRoutingModule
  ],
  declarations: [EntranceFailPage]
})
export class EntranceFailPageModule {}
