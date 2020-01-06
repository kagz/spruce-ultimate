import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'app/services/data.service';
import { RestApiService } from 'app/services/rest-api.service';
@Component({
  selector: 'app-updatejob',
  templateUrl: './updatejob.component.html',
  styleUrls: ['./updatejob.component.css']
})
export class UpdatejobComponent implements OnInit {
  // job = {
  //   jobname: '',
  //   companyname: '',
  //   dateOfStart: '',
  //   staffs: '',
  //   jobdesc: '',
  //   clientlocation: ''
  // }
  job: any;
  categories: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private data: DataService,
    private rest: RestApiService,
    private router: Router,


  ) { }

  async ngOnInit () {
    this.activatedRoute.params.subscribe(res => {
      console.log(res)
      this.rest
        .get(`https://sprucemvp-api.herokuapp.com/job/${res['id']}`)
        .then(data => {
          data
            ? (this.job = data)
            : this.router.navigate(['/dashboard']);

          console.log(data);
        })
        .catch(error => this.data.error(error));
    });


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

  };


  validate (job) {
    if (job.name) {
      if (job.clientlocation) {
        if (job.companyname) {
          if (job.staffs) {
            if (job.dateOfStart) {
              if (job.jobdesc) {
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
  async updateJob () {

    if (this.validate(this.job)) {

    }
    this.activatedRoute.params.subscribe(res => {

      const data = this.rest.patch(
        `https://sprucemvp-api.herokuapp.com/job/${res['id']}`,
        {
          name: this.job.name,
          companyname: this.job.companyname,
          clientlocation: this.job.clientlocation,
          dateOfStart: this.job.dateOfStart,
          staffs: this.job.staffs,
          jobdesc: this.job.jobdesc,
        }
      )
        ;
      data
        ? this.data.success('record updated succesfully')

        //.catch(error => this.data.error("an error occured check if company exists"))
        : this.data.error("an error occured check if Job exists or call admin");

      console.log(data)
      this.router.navigate(['/dashboard'])


    })
    // console.log(resp.data);
  }







}