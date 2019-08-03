import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email = '';
  password = '';
  errMsg="";

  btnDisabled = false;
  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private loginService: LoginService )
       { }
   ngOnInit() {
      this.loginForm = this.formBuilder.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
      });
      this.loginService.logout(true);
  }
  async Login() {
    this.btnDisabled = true;
  	this.loginService.getToken(this.email, this.password).subscribe(
  		async res => {
      if (res.user === undefined || res.user.token === undefined || res.user.token === "INVALID" ){
        this.errMsg = 'Username or password is incorrect';
        return;
    }
    //await this.res.getProfile();
        this.router.navigate(['dashboard'])
     }
    );
    this.btnDisabled = false;
  }
}