import { Component, OnInit, AfterViewInit } from '@angular/core';

import { DataService } from 'app/services/data.service';

import { Router } from '@angular/router';
import { Company } from 'app/pages/model/createcompany.model';
import { HttpErrorResponse } from '@angular/common/http';
import { RestApiService } from 'app/services/rest-api.service';

@Component({
  selector: 'app-addcompanies',
  templateUrl: './addcompanies.component.html',
  styleUrls: ['./addcompanies.component.css']
})
export class AddcompaniesComponent implements OnInit {

  cities: any

  newCompany: Company;

  errors: any[] = [];

  ngAfterViewInit (): void {

  }

  handleImageChange () {
    this.newCompany.image = "";
  }



  btnDisabled = false;

  constructor(
    private data: DataService,
    private rest: RestApiService,
    private router: Router
  ) { }

  async ngOnInit () {
    this.newCompany = new Company();
    this.allCities();

  }

  async allCities () {
    this.cities = [];

    try {
      const data = await this.rest.get(
        'http://localhost:3030/cities/all'
      );

      data
        ? (this.cities = data)
        : this.data.error(data['message']);
    } catch (error) {
      this.data.error(error['message']);
    }


  }

  handleImageUpload (imageUrl: string) {
    this.newCompany.image = imageUrl;
  }

  handleImageError () {
    this.newCompany.image = '';
  }

  async addCompany () {

    this.btnDisabled = true;
    try {

      const form = new FormData();

      const data = await this.rest.post(
        'http://localhost:3030/addcompany',
        form
      );
      data['success']
        ? this.router.navigate(['/dashboard'])
          .then(() => this.data.success(data['message']))
          .catch(error => this.data.error(error))
        : this.data.error(data['message']);

    } catch (error) {
      this.data.error(error['message']);
    }
    this.btnDisabled = false;
  }
}