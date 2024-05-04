import { Injectable } from '@angular/core';
import { CityGateway } from '../../domain/models/city/gateway/city-gateway';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { City } from '../../domain/models/city/city';

@Injectable({
  providedIn: 'root'
})
export class CityApiService extends CityGateway {
  urlBase: string = "https://api-colombia.com/api/v1/Departament";
  constructor() {
    super();
  }

  getCitiesByDepartamentId(departamentId: number): Observable<City[]> {
    return new Observable<City[]>(obs => {
      fetch(this.urlBase+"/"+departamentId+"/cities")
        .then(response => response.json())
        .then(json => {
          obs.next(json);
          obs.complete();
        })
    });
  }
}
