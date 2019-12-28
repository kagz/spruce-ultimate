import { Job } from "./job.model";

export class Company {

    _id: string;
    name: string;
    phone: string;
    email: string;
    clientLocation: string;
    jobdesc: string;
    job: Job[];
    image: string;


}