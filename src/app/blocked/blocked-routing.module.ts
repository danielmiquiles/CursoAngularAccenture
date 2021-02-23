import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlockedComponent } from './blocked/blocked.component';

const routes: Routes = [
  {
    path: '',
    component: BlockedComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlockedRoutingModule {}
