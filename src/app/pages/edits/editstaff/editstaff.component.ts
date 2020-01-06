import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-editstaff',
  templateUrl: './editstaff.component.html',
  styleUrls: ['./editstaff.component.css']
})
export class EditstaffComponent implements OnInit {




  constructor(private location: Location) { }

  ngOnInit () {

  }

}