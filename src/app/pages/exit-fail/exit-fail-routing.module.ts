import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExitFailPage } from './exit-fail.page';

const routes: Routes = [
  {
    path: '',
    component: ExitFailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExitFailPageRoutingModule {}
