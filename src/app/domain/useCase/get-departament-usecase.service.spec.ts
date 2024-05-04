import { TestBed } from '@angular/core/testing';

import { GetDepartamentUsecaseService } from './get-departament-usecase.service';
import { DepartamentGateway } from '../models/departament/gateway/departament-gateway';
import { Departament } from '../models/departament/departament';
import { of } from 'rxjs';

describe('GetDepartamentUsecaseService', () => {
  let service: GetDepartamentUsecaseService;
  let departamentGatewayMock = {getAllDepartament: jest.fn()};
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[{
        provide: DepartamentGateway, useValue: departamentGatewayMock
      }]
    });
    service = TestBed.inject(GetDepartamentUsecaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should return Observable whit departaments',()=>{
    let departaments: Departament[] = [
      {id:1,name:"nameDepartament"},
      {id:2,name:"nameDepartament"}
    ]
    departamentGatewayMock.getAllDepartament.mockReturnValue(of(departaments));
    service.getAllDepartament().subscribe((response: Departament[])=>{
      expect(response.length).toEqual(departaments.length);
    })
  });
});
