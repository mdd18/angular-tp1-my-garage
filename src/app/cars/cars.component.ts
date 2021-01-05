import { Component, OnInit } from '@angular/core';
import { Car } from './shared/car.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car [];

  constructor() {

    let car1 = new Car(1,'Toyota','Yarris',100,1258,7800,5);
    let car2 = new Car(2,'Peugeot','605',100,1258,7800,5);
    
    this.cars = [];
    this.cars.push(car1);
    this.cars.push(car2);

  }

  ngOnInit(): void {
  }


  onSelect(car): void {



  }

}
