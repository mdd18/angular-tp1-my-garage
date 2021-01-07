import { Injectable } from '@angular/core';
import { Car } from './shared/car.model';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  cars: Car[] = []

  constructor() {

    this.cars.push( new Car(1,'Totoyota','Yarris',100,1258,7800,5) );
    this.cars.push( new Car(2,'Peupeugeot','605',100,1258,7800,5) );


   }

  GetAllCars() { return of(this.cars); }

  GetCar(id: number) { 

    // for (let i=0; i<this.cars.length; i++) {
    //   let currentCar = this.cars[i];
    //   if (currentCar.id === id) {
    //     return of(this.cars[i]); 
    //   }
    // }

    return of(this.cars.find(c=>c.id===id));

  }

  PostCar(car: Car) { };
  PutCar(car: Car) { };
  DeleteCar(car: Car) { };
}
