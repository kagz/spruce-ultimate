import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare const $: any;
@Component({
  selector: 'app-addjobs',
  templateUrl: './addjobs.component.html',
  styleUrls: ['./addjobs.component.css']
})
export class AddjobsComponent implements OnInit, AfterViewInit {

  jobname = '';
  companyname = '';
  dateOfStart = '';
  staffs = '';
  jobdesc = ''
  constructor() { }

  ngOnInit () {

  }
  ngAfterViewInit () {
  }
}