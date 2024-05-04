import { Injectable } from '@angular/core';
import { DepartamentGateway } from '../../domain/models/departament/gateway/departament-gateway';
import { Observable } from 'rxjs';
import { Departament } from '../../domain/models/departament/departament';

@Injectable({
  providedIn: 'root'
})
export class DepartamentApiService extends DepartamentGateway{
  urlBase: string = "https://api-colombia.com/api/v1/Departament";
  constructor() { 
    super()
  }
  getAllDepartament(): Observable<Departament[]>{
    return new Observable<Departament[]>(obs => {
      fetch(this.urlBase)
        .then(response => response.json())
        .then(json => {
          obs.next(json);
          obs.complete();
        })
    });
  }
}
