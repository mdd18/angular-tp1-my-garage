import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CarsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CarsComponent]
})
export class CarsModule { }
