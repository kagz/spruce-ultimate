import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-editstaff',
  templateUrl: './editstaff.component.html',
  styleUrls: ['./editstaff.component.css']
})
export class EditstaffComponent implements OnInit {


  public ownerForm: FormGroup;
 

  constructor(private location: Location) { }

  ngOnInit() {
    this.ownerForm = new FormGroup({
      jobname: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      dateOfStart: new FormControl(new Date()),
     
      staffs: new FormControl('', [Validators.required, Validators.maxLength(100)])
      ,
      companyname: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      location: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.ownerForm.controls[controlName].hasError(errorName);
  }

  public onCancel = () => {
    this.location.back();
  }
}