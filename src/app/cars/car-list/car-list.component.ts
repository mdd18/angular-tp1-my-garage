import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//import { EventEmitter } from 'events';
import { Car } from '../shared/car.model';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  @Input() cars: Car[];
  @Output() onSelected = new EventEmitter<Car>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(selectedCar: Car) : void {
    this.onSelected.emit(selectedCar);
  }
}
