import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { RestApiService } from 'app/services/rest-api.service';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  image = "../../../assets/img/card-2.jpeg"
  jobs: any;

  constructor(private data: DataService, private rest: RestApiService) { }

  async ngOnInit () {
    try {
      const data = await this.rest.get('https://sprucemvp-api.herokuapp.com/job/all');
      data
        ? (this.jobs = data)
        : this.data.error('Could not fetch jobs.');
      // console.log(this.jobs);
    } catch (error) {
      this.data.error(error);
    }
    this.data.getProfile();
  }
}
