import { Customer } from "./customer.model";

export class Company{

    _id: string;
    name: string;
    phone: string;
    email: string;
    clientLocation: string;
    jobdesc: string;
    customer:Customer[];
    image: string;
    

}