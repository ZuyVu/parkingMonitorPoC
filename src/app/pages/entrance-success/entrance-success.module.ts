import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntranceSuccessPageRoutingModule } from './entrance-success-routing.module';

import { EntranceSuccessPage } from './entrance-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntranceSuccessPageRoutingModule
  ],
  declarations: [EntranceSuccessPage]
})
export class EntranceSuccessPageModule {}
