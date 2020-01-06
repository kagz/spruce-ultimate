import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'app/services/data.service';
import { RestApiService } from 'app/services/rest-api.service';
@Component({
  selector: 'app-editcompany',
  templateUrl: './editcompany.html',
  styleUrls: ['./editcompany.css']
})
export class EditcompanyComponent implements OnInit {
  company: any;

  /*
   = {
    name: '',
    clientlocation: '',
    picture: '',
    phone: '',
    email: '',
    photo: ''
  };
  
  */


  constructor(
    private activatedRoute: ActivatedRoute,
    private data: DataService,
    private rest: RestApiService,
    private router: Router,


  ) { }

  ngOnInit () {
    this.activatedRoute.params.subscribe(res => {
      console.log(res)
      this.rest
        .get(`https://sprucemvp-api.herokuapp.com/company/${res['id']}`)
        .then(data => {
          data
            ? (this.company = data)
            : this.router.navigate(['/dashboard']);

          console.log(data);
        })
        .catch(error => this.data.error(error));
    });
  }


  validate (company) {
    if (company.name) {
      if (company.clientlocation) {
        if (company.email) {
          if (company.phone) {

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





  async updateCompany () {

    if (this.validate(this.company)) {

      try {
        let profileData = {
          name: this.company.name,
          phone: this.company.phone,
          clientlocation: this.company.clientlocation,
          email: this.company.email,

        }
        this.activatedRoute.params.subscribe(res => {
          const data = this.rest.patch(
            `https://sprucemvp-api.herokuapp.com/company/${res['id']}`,
            profileData
          );
          data
            ? this.data.success('record saved succesfully')
            //.catch(error => this.data.error("an error occured check if company exists"))
            : this.data.error("an error occured check if company exists or call admin");
          this.router.navigate(['/dashboard'])
        })
      } catch (err) {
        console.log(err)
      }

      // console.log(resp.data);
    }





  }
}