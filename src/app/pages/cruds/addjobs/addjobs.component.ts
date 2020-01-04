import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'app/services/data.service';
import { RestApiService } from 'app/services/rest-api.service';
import { Router } from '@angular/router';
declare const $: any;
@Component({
  selector: 'app-addjobs',
  templateUrl: './addjobs.component.html',
  styleUrls: ['./addjobs.component.css']
})
export class AddjobsComponent implements OnInit, AfterViewInit {

  newJob = {
    jobname: '',
    companyname: '',
    dateOfStart: '',
    staffs: '',
    jobdesc: '',
    clientlocation: ''
  }

  constructor(
    private data: DataService,
    private rest: RestApiService,
    private router: Router
  ) { }
  categories: any;
  async ngOnInit () {
    try {
      const data = await this.rest.get(
        'https://sprucemvp-api.herokuapp.com/company/all'
      );
      data
        ? (this.categories = data)
        : this.data.error('failed to load companies please add one');
      console.log(data)
    } catch (error) {
      this.data.error('failed to load companies please add one');
    }
  }
  ngAfterViewInit () {
  }


  validate (newJob) {
    if (newJob.jobname) {
      if (newJob.clientlocation) {
        if (newJob.companyname) {
          if (newJob.staffs) {
            if (newJob.dateOfStart) {
              if (newJob.jobdesc) {
                return true;

              } else {
                this.data.error('Please enter Jobname.');
              }
            } else {
              this.data.error('Please enter start date.');
            }
          } else {
            this.data.error('Please enter staffs.');
          }
        } else {
          this.data.error('Please enter Job Description.');
        }
      } else {
        this.data.error('Please enter Client location.');
      }
    } else {
      this.data.error('Please enter a company name.');
    }
  }
  async addJob () {

    if (this.validate(this.newJob)) {

      try {
        let jobData = {


          name: this.newJob.jobname,
          companyname: this.newJob.companyname,
          clientlocation: this.newJob.clientlocation,
          dateOfStart: this.newJob.dateOfStart,
          staffs: this.newJob.staffs,
          jobdesc: this.newJob.jobdesc,
        }
        const data = this.rest.post(
          'https://sprucemvp-api.herokuapp.com/job',
          jobData
        );
        data
          ? this.data.success('record saved succesfully')

          //.catch(error => this.data.error("an error occured check if company exists"))
          : this.data.error("an error occured check if Job exists or call admin");

        console.log(data)
        this.router.navigate(['/dashboard'])

      } catch (err) {
        this.data.error("an error occured check if Job exists or call admin");

      }

      // console.log(resp.data);
    }





  }
}