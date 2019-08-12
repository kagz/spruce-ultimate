import { Component, OnInit, AfterViewInit } from '@angular/core';

import { DataService } from 'app/services/data.service';
import { RestApiService } from 'app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcompanies',
  templateUrl: './addcompanies.component.html',
  styleUrls: ['./addcompanies.component.css']
})
export class AddcompaniesComponent implements  OnInit {

  cities : any
 

newCompany={
  email : '',
  name : '',
  phone:'',
clientlocation: '',
jobdesc:'',

};
  ngAfterViewInit(): void {
  
  }

   constructor(
    private data:DataService,
    private auth: RestApiService,
    private router: Router,

  ) { }
   async ngOnInit() {
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


 async addCompany() {
 
    try {
        const data = await this.auth.post(
          'http://localhost:3030/company',
       this.newCompany
        );
        data
          ? this.router.navigate(['dashboard'])
            .then(() => 
            this.data.success(data['message']))
            .catch(error => this.data.error(error))
          : this.data.error(data['message']);
     
    } catch (error) {
      this.data.error(error['message']);
    }

}
}