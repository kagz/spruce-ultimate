import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare const $: any;
@Component({
  selector: 'app-addcompanies',
  templateUrl: './addcompanies.component.html',
  styleUrls: ['./addcompanies.component.css']
})
export class AddcompaniesComponent implements  OnInit, AfterViewInit {
  public newCompanyForm: FormGroup;
  email = '';
  name='';
  jobdesc = '';
  phone = '';
  clientLocation = '';
  constructor() { }

  ngOnInit() {
    this.newCompanyForm = new FormGroup({
      name: new FormControl('kamagera', [Validators.required, Validators.maxLength(60)]),
 
       jobdesc: new FormControl('wizi na upinji', [Validators.required, Validators.maxLength(100)])
       ,
       phone: new FormControl('0721284155', [Validators.required, Validators.maxLength(100)])
       ,
       email: new FormControl('kamagera@gmail.com', [Validators.required, Validators.maxLength(100)]),
       clientLocation: new FormControl('', [Validators.required, Validators.maxLength(100)])
     });
  }
  ngAfterViewInit() {
}
}