import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CreateCompany } from 'app/pages/model/createcompany.model';
import { CreateCompanyService } from 'app/services/createcompany.service';

declare const $: any;
@Component({
  selector: 'app-addcompanies',
  templateUrl: './addcompanies.component.html',
  styleUrls: ['./addcompanies.component.css']
})
export class AddcompaniesComponent implements  OnInit, AfterViewInit {
 
  newCompany: CreateCompany;
 
  errors: any[] = [];
 
 
 
  ngAfterViewInit(): void {
  
  }


  
  constructor(private router: Router,private companyService :CreateCompanyService

  ) { }

   ngOnInit() {
    this.newCompany = new CreateCompany();
  }
  createCompany() {
    this.companyService.createCompany(this.newCompany).subscribe(
      () => {
        this.router.navigate(["dashboard"]);
      },
      (errorResponse: HttpErrorResponse) => {
        this.errors = errorResponse.error.errors;
      })
  }

}