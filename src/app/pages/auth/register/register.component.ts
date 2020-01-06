import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'app/services/data.service';
import { RestApiService } from 'app/services/rest-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  email = '';
  name = '';
  password = '';
  phone = '';
  btnDisabled = false;

  constructor(
    private router: Router,
    private data: DataService,
    private rest: RestApiService,
  ) { }

  ngOnInit () {
    this.data.logout();

  }

  validate () {
    if (this.name) {
      if (this.email) {

        if (this.password)
          // if (this.phone)
          return true;

        else {
          this.data.error('Password is not entered');
        }
      } else {
        this.data.error('Email is not entered.');
      }
    } else {
      this.data.error('Name is not entered.');
    }
  }
  async onRegister () {

    this.btnDisabled = true;
    try {
      if (this.validate()) {
        const data = await this.rest.post(
          'https://sprucemvp-api.herokuapp.com/register',
          {
            name: this.name,
            email: this.email,
            password: this.password,
            phone: this.phone,
          },
        );

        if (data) {
          localStorage.setItem('token', data['token']);
          //await this.data.getProfile();
          this.router.navigate(['dashboard']);
        } else {
          this.data.error('Profile loading Failed!');
        }
      }
    } catch (error) {
      console.log(error)
      this.data.error('Registration Failed! check credentials');

    }
    this.btnDisabled = false;
  }
}