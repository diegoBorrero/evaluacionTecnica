import { TestBed } from '@angular/core/testing';

import { GetCityUsecaseService } from './get-city-usecase.service';
import { CityGateway } from '../models/city/gateway/city-gateway';
import { City } from '../models/city/city';
import { of } from 'rxjs';

describe('GetCityUsecaseService', () => {
  let service: GetCityUsecaseService;
  let cityGatewayMock = {getCitiesByDepartamentId: jest.fn()};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[{provide: CityGateway, useValue: cityGatewayMock}]
    });
    service = TestBed.inject(GetCityUsecaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should return Observable whit cities',()=>{
    let departamentId: number = 1;
    let cities: City[] = [
      {id:1,name:"nameCity"},
      {id:2,name:"nameCity"}
    ]
    cityGatewayMock.getCitiesByDepartamentId.mockReturnValue(of(cities));
    service.getCitiesByDepartamentId(departamentId).subscribe((response: City[])=>{
      expect(response.length).toEqual(cities.length);
    })
  });
});
