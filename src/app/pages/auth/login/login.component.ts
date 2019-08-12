import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RestApiService } from 'app/services/auth.service';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email = 'admin@admin.com';
  password = '12345';

  constructor(
      private formBuilder: FormBuilder,
      private data:DataService,
      private auth: RestApiService,
      private router: Router,
    
     )
       { }
   ngOnInit() {
      this.loginForm = this.formBuilder.group({
          email: ['kagwiandrew@gmail.com', Validators.required],
          password: ['ryan6969', Validators.required]
      });
     
  }
   async Login() {
    try {
      if (this.loginForm) {
        const data = await this.auth.post(
          'http://localhost:3030/login',
          {
            email: this.email,
            password: this.password,
          },
        );
        if (data) {
          localStorage.setItem('token', data['token']);
       await this.data.getProfile();
          this.router.navigate(['dashboard']);
        } else {
          this.data.error(data['message']);
          console.log(data)
        }
      }
    } catch (error) {
      this.data.error(error['message']);
      console.log(error)
    }
  }
}