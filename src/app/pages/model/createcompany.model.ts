import { Customer } from "./customer.model";

export class CreateCompany{

    _id: string;
    name: string;
    phone: string;
    email: string;
    clientLocation: string;
    jobdesc: string;
    customer:Customer[];
	image: string;

}