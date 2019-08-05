import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-updatejob',
  templateUrl: './updatejob.component.html',
  styleUrls: ['./updatejob.component.css']
})
export class UpdatejobComponent implements OnInit {
  public newJobsForm: FormGroup;
  jobname = '';
  companyname='';
  dateOfStart = '';
  staffs = '';
  
  constructor() { }

  ngOnInit() {
    this.newJobsForm = new FormGroup({
      jobname: new FormControl('', [Validators.required]),
 
       companyname: new FormControl('', [Validators.required])
       ,
       dateOfStart: new FormControl('', [Validators.required])
       ,
       staffs: new FormControl('5', [Validators.required]),
      
     });
  }
  ngAfterViewInit() {
}
}