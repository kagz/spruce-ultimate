import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgetPasswordService } from 'app/services/forgetpassword.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  registerForm: FormGroup;
  email = '';
  succMsg='';
  errMsg="";
  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private loginService: ForgetPasswordService )
       { }
   ngOnInit() {
      this.registerForm = this.formBuilder.group({
          email: ['', Validators.required],
        
      });
     
  }
  Register() {
  	this.loginService.requestPass(this.email).subscribe(
  		res => {
      if (res.user === undefined || res.user.token === undefined || res.user.token === "INVALID" ){
        this.errMsg = 'This Email Is Ivalid!!';
        return;
    }
    this.succMsg = 'Check Your Email For New Password';
        this.router.navigate(['forgetpassword'])
     }
  	);
  }
}