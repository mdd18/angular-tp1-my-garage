import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-garage';
  isEnable: boolean;
  names: string [];



  constructor() {
    this.isEnable = false;
    this.names = ["Philippe", "Benjamin"];
  }

  toggle() {
    this.isEnable = !this.isEnable;
  }

}