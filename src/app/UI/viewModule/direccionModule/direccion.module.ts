import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DireccionRoutingModule } from './direccion-routing.module';
import { DeliveryComponent } from './delivery/delivery.component';
import { DisplayComponent } from './display/display.component';


@NgModule({
  declarations: [
    DeliveryComponent,
    DisplayComponent
  ],
  imports: [
    CommonModule,
    DireccionRoutingModule
  ]
})
export class DireccionModule { }
