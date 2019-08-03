import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  email = '';
  name='';
  password = '';
  errMsg="";
  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private registerService: RegisterService,
 
            )

       { }
 
  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          email: ['', Validators.required],
          password: ['', Validators.required],
          name: ['', Validators.required]
      });

     // this.loginService.logout(true);


  }
  Register() {
  	this.registerService.newUser(this.email, this.password,this.name).subscribe(
  		res => {
      //	console.log(res);
      
      if (res.user === undefined || res.user.token === undefined || res.user.token === "INVALID" ){
        this.errMsg = 'Email is Already Registered!!';
        return;
    }
  			localStorage.setItem("xAuthToken", JSON.stringify(res));
  			
       
      this.router.navigate(['dashboard'])
     
  		}
  	);
  }
}