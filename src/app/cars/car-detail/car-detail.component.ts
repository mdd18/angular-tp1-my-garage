import { Car } from '../shared/car.model';
import { Component, Input, OnInit, OnChanges, Output, SimpleChanges } from '@angular/core';
//import { EventEmitter } from 'events';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnChanges {

  @Input() carId: number; // | null;
  car: Car ; //| null = null;

  constructor(private carService: CarService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.carId) {
      this.carService.GetCar(changes.carId.currentValue).subscribe(car => this.car = car);
    }
  }


}
