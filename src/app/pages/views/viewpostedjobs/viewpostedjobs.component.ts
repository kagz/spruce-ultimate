
import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Job } from 'app/pages/model/job.model';
import { Logger } from 'app/services/logger.service';
import { RestApiService } from 'app/services/rest-api.service';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'app-viewpostedjobs',
  templateUrl: './viewpostedjobs.component.html',
  styleUrls: ['./viewpostedjobs.component.css']
})
export class ViewPostedJobsComponent implements OnInit {
  public displayedColumns = ['jobname', 'clientname', 'startdate', 'editjob', 'delete'];
  public dataSource = new MatTableDataSource<Job>();
  screenHeight: any;
  screenWidth: any;
  jobs: any;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @HostListener('window:resize', ['$event'])
  onResize (event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.logger.log(`Resize() height: ${this.screenHeight}; width: ${this.screenWidth}`);
    this.setDisplayedColumns();
  }

  constructor(

    private data: DataService,
    private rest: RestApiService,
    private logger: Logger) {

    this.screenHeight = window.screen.height;
    this.screenWidth = window.screen.width;
    this.logger.log(`Init() height: ${this.screenHeight}; width: ${this.screenWidth}`);
    this.setDisplayedColumns();

  }

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



    this.dataSource.data = this.jobs;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
  applyFilter (filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } setDisplayedColumns () {
    if (this.screenWidth < 420) {
      this.displayedColumns = ['jobname', 'clientname', 'startdate', 'editjob', 'delete'];
    }
    else if (this.screenWidth >= 420 && this.screenWidth <= 800) {
      this.displayedColumns = ['jobname', 'clientname', 'startdate', 'editjob', 'delete'];
    }
    else {
      this.displayedColumns = ['jobname', 'clientname', 'startdate', 'editjob', 'delete'];
    }
  }
}