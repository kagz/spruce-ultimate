import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { Observable,BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { UserInfoService, LoginInfoInStorage } from './user-info.service';
import { ApiRequestService } from './api-request.service';
export interface RegisterRequestParam{
    email:string;
    password:string;
    name:string;
}
@Injectable()
export class RegisterService {
    public landingPage:string = "/dashboard";
    constructor(
       
        private userInfoService: UserInfoService,
        private apiRequest: ApiRequestService
    ) {}
    newUser(email:string, password:string, name:string): Observable<any> {
        let me = this;
        let bodyData:RegisterRequestParam = {
            "email": email,
            "name": name,
            "password": password,
        }
         let registerDataSubject:BehaviorSubject<any> = new BehaviorSubject<any>([]); 
        let loginInfoReturn:LoginInfoInStorage; 
        this.apiRequest.post('register', bodyData)
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
                    this.userInfoService.storeUserInfo(JSON.stringify(loginInfoReturn.user));
                }
                else {
                    //Create a faliure object that we want to send back to login page
                    loginInfoReturn = {
                    "landingPage":"/register"
                    };
                }
                registerDataSubject.next(loginInfoReturn);
            },
            err => {
              loginInfoReturn = {
              "landingPage": "/register"
              };
            });
          return registerDataSubject;
    }

}
