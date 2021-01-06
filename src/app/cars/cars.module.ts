import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars.component';
import { FormsModule } from '@angular/forms';
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailComponent } from './car-detail/car-detail.component';



@NgModule({
  declarations: [CarsComponent, CarListComponent, CarDetailComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CarsComponent]
})
export class CarsModule { }
