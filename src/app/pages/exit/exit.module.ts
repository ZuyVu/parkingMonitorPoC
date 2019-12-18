import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExitPageRoutingModule } from './exit-routing.module';

import { ExitPage } from './exit.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExitPageRoutingModule,
    SharedModule
  ],
  declarations: [ExitPage]
})
export class ExitPageModule {}
