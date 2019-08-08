import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';
import { CreateCompany } from 'app/pages/model/createcompany.model';
import { ApiRequestService } from './api-request.service';


@Injectable()
export class CreateCompanyService {
    
    constructor(private apiRequest: ApiRequestService
      
    ) {}

}
