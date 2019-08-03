import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addstaff',
  templateUrl: './addstaff.component.html',
  styleUrls: ['./addstaff.component.css']
})
export class AddstaffComponent implements OnInit {
  firstName: string;
  lastName: string;
  constructor() { }

  ngOnInit() {
    this.firstName = 'Druu';
    this.lastName = 'Kagwi';
  }
}
