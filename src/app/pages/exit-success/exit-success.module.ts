import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExitSuccessPageRoutingModule } from './exit-success-routing.module';

import { ExitSuccessPage } from './exit-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExitSuccessPageRoutingModule
  ],
  declarations: [ExitSuccessPage]
})
export class ExitSuccessPageModule {}
