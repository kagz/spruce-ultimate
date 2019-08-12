import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'app/services/data.service';
import { RestApiService } from 'app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  email = 'kagwiandrew@gmail.com';
  name='kamagera mwenyewe';
  password = '';

  constructor(
     

      private router: Router,
      private data: DataService,
      private rest: RestApiService,
 
            )

       { }
 
  ngOnInit() {


  }
  async onRegister() {
   // this.btnDisabled = true;
    try {
     
        const data = await this.rest.post(
          'http://localhost:3030/register',
          {
            name: this.name,
            email: this.email,
            password: this.password,
           
          },
        );
        if (data) {
          localStorage.setItem('token', data['token']);
          await this.data.getProfile();
          this.data.success('Registration successful!');
          this.router.navigate(['dashboard']);
        } else {
          this.data.error(data['message']);
        }
  
    } catch (error) {
      this.data.error(error['message']);
    }
   // this.btnDisabled = false;
  }
}