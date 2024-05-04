import { Injectable } from '@angular/core';
import { DepartamentGateway } from '../models/departament/gateway/departament-gateway';
import { Observable } from 'rxjs';
import { Departament } from '../models/departament/departament';

@Injectable({
  providedIn: 'root'
})
export class GetDepartamentUsecaseService {

  constructor(private departamentGateway: DepartamentGateway) { }

  getAllDepartament(): Observable<Departament[]>{
    return this.departamentGateway.getAllDepartament();
  }
}
