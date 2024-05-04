import { Injectable } from '@angular/core';
import { CityGateway } from '../models/city/gateway/city-gateway';
import { Observable } from 'rxjs';
import { City } from '../models/city/city';

@Injectable({
  providedIn: 'root'
})
export class GetCityUsecaseService {

  constructor(private cityGateway: CityGateway) { }

  getCitiesByDepartamentId(departamentId: number):Observable<City[]>{
    return this.cityGateway.getCitiesByDepartamentId(departamentId);
  }
}
