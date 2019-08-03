import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiRequestService } from './api-request.service';
import { Customer } from 'app/pages/model/customer.model';

@Injectable()
export class CustomerService {

  constructor(private apiRequest: ApiRequestService) {}

  public getCustomerById(Id: string): Observable<any> {
    return this.apiRequest.get('customer' + Id);
  }

  public getCustomers({pageSize = 5, pageNum = 1}): Observable<any> {
    return this.apiRequest
            .get(`customer?pageSize=${pageSize}&pageNum=${pageNum}`)
  }


  public createCustomer(customer: Customer): Observable<any> {
    return this.apiRequest.post('customer', customer);
  }

  public getUserCustomers(): Observable<any> {
    return this.apiRequest.get('customer/manage');
  }

  public deleteCustomer(Id: string): Observable<any> {
    return this.apiRequest.delete(`customer/${Id}`);
  }

  public updateCustomer(Id: string, customerData: any): Observable<any> {
    return this.apiRequest.patch(`customer/${Id}`, customerData);
  }

//   public verifyCustomerUser(Id: string): Observable<any> {
//     return this.apiRequest.get(`customers/${Id}/verify-user`);
//   }
}
