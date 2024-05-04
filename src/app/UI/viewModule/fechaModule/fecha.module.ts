import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FechaRoutingModule } from './fecha-routing.module';
import { DeliveryDateComponent } from './delivery-date/delivery-date.component';


@NgModule({
  declarations: [
    DeliveryDateComponent
  ],
  imports: [
    CommonModule,
    FechaRoutingModule
  ]
})
export class FechaModule { }
