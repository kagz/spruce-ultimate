import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { Observable,BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { UserInfoService, LoginInfoInStorage } from './user-info.service';
import { ApiRequestService } from './api-request.service';
export interface LoginRequestParam{
    email:string;
    password:string;
}
@Injectable()
export class CreateCompanyService {
    public landingPage:string = "/dashboard";
    constructor(
        private router:Router,
        private userInfoService: UserInfoService,
        private apiRequest: ApiRequestService
    ) {}
    getToken(email:string, password:string): Observable<any> {
        let me = this;
        let bodyData:LoginRequestParam = {
            "email": email,
            "password": password,
        }
         let loginDataSubject:BehaviorSubject<any> = new BehaviorSubject<any>([]); 
        let loginInfoReturn:LoginInfoInStorage; 
        this.apiRequest.post('login', bodyData)
            .subscribe(jsonResp => {
                if (jsonResp){
                    //Create a success object that we want to send back to login page
                    loginInfoReturn = {
                       "landingPage": this.landingPage,
                        "user"       : {
                          "token"      : jsonResp,
                        }
                    };
                    // store username and jwt token in session storage to keep user logged in between page refreshes
                    this.userInfoService.storeUserInfo(JSON.stringify(loginInfoReturn));
                }
                else {
                    //Create a faliure object that we want to send back to login page
                    loginInfoReturn = {
                    "landingPage":"/login"
                    };
                }
                loginDataSubject.next(loginInfoReturn);
            },
            err => {
              loginInfoReturn = {
              "landingPage": "/login"
              };
            });
          return loginDataSubject;
    }
    logout(navigatetoLogout=true): void {
        // clear token remove user from local storage to log user out
        this.userInfoService.removeUserInfo();
        if(navigatetoLogout){
            this.router.navigate([""]);
        }
    }
}
