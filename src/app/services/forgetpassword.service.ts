import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { UserInfoService, LoginInfoInStorage } from './user-info.service';
import { ApiRequestService } from './api-request.service';
export interface RegisterRequestParam{
    email:string;
  
}
@Injectable()
export class ForgetPasswordService {
    public landingPage:string = "/forgetpassword";
    constructor(
        private userInfoService: UserInfoService,
        private apiRequest: ApiRequestService
    ) {}
    requestPass(email:string): Observable<any> {
        let me = this;
        let bodyData:RegisterRequestParam = {
            "email": email,
           
        }
         let registerDataSubject:BehaviorSubject<any> = new BehaviorSubject<any>([]); 
        let loginInfoReturn:LoginInfoInStorage; 
        this.apiRequest.post('forgot', bodyData)
            .subscribe(jsonResp => {
                if (jsonResp){
               
                    loginInfoReturn = {
                       "landingPage": this.landingPage,
                        "user"       : {
                          "token"      : jsonResp,
                        }
                    };
                    this.userInfoService.storeUserInfo(JSON.stringify(loginInfoReturn));
                }
                else {
                    loginInfoReturn = {
                    "landingPage":"/forgetpassword"
                    };
                }
                registerDataSubject.next(loginInfoReturn);
            },
            err => {
              loginInfoReturn = {
              "landingPage": "/forgetpassword"
              };
            });
          return registerDataSubject;
    }

}
