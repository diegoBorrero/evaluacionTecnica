import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GetDepartamentUsecaseService } from '../../../../domain/useCase/get-departament-usecase.service';
import { GetCityUsecaseService } from '../../../../domain/useCase/get-city-usecase.service';
import { Departament } from '../../../../domain/models/departament/departament';
import { City } from '../../../../domain/models/city/city';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.css'
})
export class DeliveryComponent implements OnInit{

  addres:FormControl = new FormControl('',[Validators.required]);
  departament: FormControl = new FormControl('',[Validators.required]);
  city: FormControl = new FormControl('',[Validators.required]);
  departaments: Departament[] = [];
  cities: City[] = [];

  constructor(private departamentoUsecase: GetDepartamentUsecaseService,
    private cityUsecase: GetCityUsecaseService
  ){}

  ngOnInit(): void {
    this.getDepartaments();
  }

  getDepartaments(){
    this.departamentoUsecase.getAllDepartament().subscribe((response:Departament[])=>{
      this.departaments = response.map(departament => { return {id: departament.id, name:departament.name}})
    });
  }

  getCitiesBydepartamentId(){
    this.cityUsecase.getCitiesByDepartamentId(this.departament.value).subscribe(response=>{
      this.cities = response.map(city => {return {id: city.id, name: city.name}});
    })
  }

}
