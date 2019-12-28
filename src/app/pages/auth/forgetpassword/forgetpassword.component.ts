import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'app/services/data.service';
import { RestApiService } from 'app/services/rest-api.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  email = 'kagwiandrew@gmail.com';
  errors: any[] = [];
  constructor(
    private router: Router,
    private data: DataService,
    private rest: RestApiService,
  ) { }
  ngOnInit () {
  }
  async onForgetPassword () {
    // this.btnDisabled = true;
    try {

      const data = await this.rest.post(
        'http://localhost:3030/forgot',
        {

          email: this.email,


        },
      );
      if (data) {

        this.data.success('Email sent  successful!');
        this.router.navigate(['login']);
      } else {
        //  this.data.error('Wrong email address');

      }

    } catch (errorResponse) {
      // this.data.error(error['server error']);
      this.errors = errorResponse.error.errors;
    }
    // this.btnDisabled = false;
  }
}