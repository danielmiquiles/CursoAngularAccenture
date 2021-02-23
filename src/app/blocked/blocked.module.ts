import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { BlockedRoutingModule } from './blocked-routing.module';
import { BlockedComponent } from './blocked/blocked.component';


@NgModule({
  declarations: [
    BlockedComponent
  ],
  imports: [
    CommonModule,
    BlockedRoutingModule,
    SharedModule
  ]
})
export class BlockedModule { }
