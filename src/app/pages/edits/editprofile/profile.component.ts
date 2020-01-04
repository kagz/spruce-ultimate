import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { DataService } from 'app/services/data.service';
import { RestApiService } from 'app/services/rest-api.service';
import { Logger } from 'app/services/logger.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public ownerForm: FormGroup;

  constructor(
    private data: DataService,

    private logger: Logger,


    private location: Location) { }

  async ngOnInit () {
    this.ownerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
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