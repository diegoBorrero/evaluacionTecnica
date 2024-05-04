import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartamentGateway } from './domain/models/departament/gateway/departament-gateway';
import { DepartamentApiService } from './infrastructure/driven-adapter/departament-api.service';
import { CityGateway } from './domain/models/city/gateway/city-gateway';
import { CityApiService } from './infrastructure/driven-adapter/city-api.service';
import { HomeModule } from './UI/viewModule/homeModule/home.module';
import { DireccionModule } from './UI/viewModule/direccionModule/direccion.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FechaModule } from './UI/viewModule/fechaModule/fecha.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    DireccionModule,
    ReactiveFormsModule,
    FechaModule
  ],
  providers: [{provide: DepartamentGateway, useClass: DepartamentApiService},
    {provide: CityGateway, useClass: CityApiService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
