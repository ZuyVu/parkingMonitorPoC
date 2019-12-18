import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'entrance',
    loadChildren: () => import('./pages/entrance/entrance.module').then( m => m.EntrancePageModule)
  },
  {
    path: 'exit',
    loadChildren: () => import('./pages/exit/exit.module').then( m => m.ExitPageModule)
  },
  {
    path: 'entrance-success',
    loadChildren: () => import('./pages/entrance-success/entrance-success.module').then( m => m.EntranceSuccessPageModule)
  },
  {
    path: 'exit-success',
    loadChildren: () => import('./pages/exit-success/exit-success.module').then( m => m.ExitSuccessPageModule)
  },
  {
    path: 'exit-fail',
    loadChildren: () => import('./pages/exit-fail/exit-fail.module').then( m => m.ExitFailPageModule)
  },
  {
    path: 'entrance-fail',
    loadChildren: () => import('./pages/entrance-fail/entrance-fail.module').then( m => m.EntranceFailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
