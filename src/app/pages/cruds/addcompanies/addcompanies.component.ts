import { Component, OnInit, AfterViewInit } from '@angular/core';

import { DataService } from 'app/services/data.service';
import { RestApiService } from 'app/services/auth.service';
import { Router } from '@angular/router';
import { Company } from 'app/pages/model/createcompany.model';

@Component({
  selector: 'app-addcompanies',
  templateUrl: './addcompanies.component.html',
  styleUrls: ['./addcompanies.component.css']
})
export class AddcompaniesComponent implements  OnInit {

  cities : any
 
  newCompany: Company;

  errors: any[] = [];

  ngAfterViewInit(): void {
  
  }

  handleImageChange() {
    this.newCompany.image = "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/13/image.jpeg";
  }

   constructor(
    private data:DataService,
    private auth: RestApiService,
    private router: Router,

  ) { }
   async ngOnInit() {
    this.newCompany = new Company();

    this.cities = [];
   
    try {
      const data = await this.auth.get(
        'http://localhost:3030/cities/all'
      );
    
      data
        ? (this.cities = data)
        : this.data.error(data['message']);
    } catch (error) {
      this.data.error(error['message']);
    }
  }

  handleImageUpload(imageUrl: string) {
    this.newCompany.image = imageUrl;
  }

  handleImageError() {
    this.newCompany.image = '';
  }

 async addCompany() {
 
   

}
}