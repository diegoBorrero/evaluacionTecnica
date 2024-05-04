import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home', loadChildren:()=>import('./UI/viewModule/homeModule/home.module').then(h=>h.HomeModule)},
  {path:'addres', loadChildren:()=>import('./UI/viewModule/direccionModule/direccion.module').then(d=>d.DireccionModule)},
  {path: '', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
