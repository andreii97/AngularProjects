import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'experiment';

  months = ["January","February","March","April","May", "June", "July" , "August" , "September" , "October", "November" , "December"];

  isavailable = false;

  myClickFunction(event) {
    this.isavailable = !this.isavailable;
  }

  changeMonths(event) {
    console.log("Changed month from the Dropdown");
    console.log(event);
    alert("Changed month from the dropdown");

  }
}
