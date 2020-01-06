import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

import { Logger } from 'app/services/logger.service';
import { DataService } from 'app/services/data.service';

import { Company } from 'app/pages/model/createcompany.model';
import { RestApiService } from 'app/services/rest-api.service';

@Component({
  selector: 'app-viewclients',
  templateUrl: './viewclients.component.html',
  styleUrls: ['./viewclients.component.css']
})
export class ViewClients implements OnInit {
  public displayedColumns = ['clientname', 'contacts', 'location', 'edit', 'delete'];
  public dataSource = new MatTableDataSource<Company>();
  screenHeight: any;
  screenWidth: any;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @HostListener('window:resize', ['$event'])
  onResize (event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.logger.log(`Resize() height: ${this.screenHeight}; width: ${this.screenWidth}`);
    this.setDisplayedColumns();
  }

  ourclients: any;

  constructor(
    private logger: Logger,
    private data: DataService,
    private rest: RestApiService) {

    this.screenHeight = window.screen.height;
    this.screenWidth = window.screen.width;
    this.logger.log(`Init() height: ${this.screenHeight}; width: ${this.screenWidth}`);
    this.setDisplayedColumns();

  }

  async ngOnInit () {
    ///populate table

    try {
      const data = await this.rest.get(
        'https://sprucemvp-api.herokuapp.com/company/all'
      );
      data
        ? (this.ourclients = data)
        : this.data.error(data['message']);
      console.log(data)
    } catch (error) {
      this.data.error(error['message']);
    }

    //pagination
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.data = this.ourclients;
  }
  doFilter (filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } setDisplayedColumns () {
    if (this.screenWidth < 420) {
      this.displayedColumns = ['clientname', 'contacts', 'location', 'edit', 'delete'];
    }
    else if (this.screenWidth >= 420 && this.screenWidth <= 800) {
      this.displayedColumns = ['clientname', 'contacts', 'location', 'edit', 'delete'];
    }
    else {
      this.displayedColumns = ['clientname', 'contacts', 'location', 'edit', 'delete'];
    }
  }
}