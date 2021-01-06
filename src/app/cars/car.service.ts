import { Injectable } from '@angular/core';
import { Car } from './shared/car.model';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  GetAllCars() {};
  GetCar(id: number) { };
  PostCar(car: Car) { };
  PutCar(car: Car) { };
  DeleteCar(car: Car) { };
}
