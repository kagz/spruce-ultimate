import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare const $: any;
@Component({
  selector: 'app-addjobs',
  templateUrl: './addjobs.component.html',
  styleUrls: ['./addjobs.component.css']
})
export class AddjobsComponent implements OnInit, AfterViewInit {
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