import { Component, OnInit, AfterViewInit } from '@angular/core';

import { DataService } from 'app/services/data.service';

import { Router } from '@angular/router';
import { Company } from 'app/pages/model/createcompany.model';

import { RestApiService } from 'app/services/rest-api.service';

@Component({
  selector: 'app-addcompanies',
  templateUrl: './addcompanies.component.html',
  styleUrls: ['./addcompanies.component.css']
})
export class AddcompaniesComponent implements OnInit {

  newCompany = {
    name: '',
    clientlocation: '',
    picture: '',
    phone: '',
    email: '',
    photo: ''
  };
  btnDisabled = false;
  //name,clientlocation,picture,phone,email


  constructor(
    private data: DataService,
    private rest: RestApiService,
    private router: Router
  ) { }

  ngAfterViewInit (): void {

  }


  validate (newCompany) {
    if (newCompany.name) {
      if (newCompany.clientlocation) {
        if (newCompany.email) {
          if (newCompany.phone) {

            return true;

          } else {
            this.data.error('Please enter name.');
          }
        } else {
          this.data.error('Please enter email.');
        }
      } else {
        this.data.error('Please enter a location.');
      }
    } else {
      this.data.error('Please enter a phone.');
    }
  }


  async ngOnInit () {


  }


  async addCompany () {

    if (this.validate(this.newCompany)) {

      try {
        let profileData = {
          name: this.newCompany.name,
          phone: this.newCompany.phone,
          clientlocation: this.newCompany.clientlocation,
          email: this.newCompany.email,

        }
        const data = this.rest.post(
          'https://sprucemvp-api.herokuapp.com/company',
          profileData
        );
        data
          ? this.data.success('record saved succesfully')
          //.catch(error => this.data.error("an error occured check if company exists"))
          : this.data.error("an error occured check if company exists or call admin");
        this.router.navigate(['/dashboard'])

      } catch (err) {
        console.log(err)
      }

      // console.log(resp.data);
    }





  }
}