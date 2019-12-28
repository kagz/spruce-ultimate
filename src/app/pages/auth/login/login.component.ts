import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from '../../../services/data.service';
import { RestApiService } from 'app/services/rest-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email = 'kagwiandrew@gmail.com';
  password = '123456';
  errors: any[] = [];
  btnDisabled = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private rest: RestApiService,
    private data: DataService,

  ) { }
  ngOnInit () {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
  validate () {
    if (this.email) {
      if (this.password) {
        return true;
      } else {
        this.data.error('Password is not entered');
      }
    } else {
      this.data.error('Email is not entered.');
    }
  }
  async Login () {


    this.btnDisabled = true;
    try {
      if (this.validate()) {
        const data = await this.rest.post(
          'https://sprucemvp-api.herokuapp.com/login',
          {
            email: this.email,
            password: this.password,
          },
        );
        if (data) {
          localStorage.setItem('token', data['token']);

          this.router.navigate(['dashboard']);
          await this.data.getProfile();
        } else {
          this.data.error(data['message']);
        }
      }
    } catch (error) {
      this.data.error(error['message']);
    }
    this.btnDisabled = false;
  }
}
