import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CreateCompany } from 'app/pages/model/createcompany.model';
import { CreateCompanyService } from 'app/services/createcompany.service';
import { DataService } from 'app/services/data.service';
import { first } from 'rxjs/operators';
import { throwError } from 'rxjs';
declare const $: any;
@Component({
  selector: 'app-addcompanies',
  templateUrl: './addcompanies.component.html',
  styleUrls: ['./addcompanies.component.css']
})
export class AddcompaniesComponent implements  OnInit {
 
  newCompany: CreateCompany;
  states : any[] = [];
  errors: any[] = [];
 
 
 
  ngAfterViewInit(): void {
  
  }


  
  constructor(

  ) { }

   ngOnInit() {
    this.newCompany = new CreateCompany();
  }


  handleImageChange() {
    this.newCompany.image = "";
  }

  handleImageUpload(imageUrl: string) {
    this.newCompany.image = imageUrl;
  }

  handleImageError() {
    this.newCompany.image = '';
  }




 addCompany() {
 
}
}