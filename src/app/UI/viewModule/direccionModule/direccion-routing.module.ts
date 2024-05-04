import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryComponent } from './delivery/delivery.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  {path:'', component: DeliveryComponent},
  {path: 'viewAdress', component:DisplayComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DireccionRoutingModule { }
