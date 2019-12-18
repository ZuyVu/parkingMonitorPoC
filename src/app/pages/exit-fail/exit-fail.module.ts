import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExitFailPageRoutingModule } from './exit-fail-routing.module';

import { ExitFailPage } from './exit-fail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExitFailPageRoutingModule
  ],
  declarations: [ExitFailPage]
})
export class ExitFailPageModule {}
