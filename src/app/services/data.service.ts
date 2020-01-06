import { Injectable } from '@angular/core';

import { NavigationStart, Router } from '@angular/router';
import { RestApiService } from './rest-api.service';
import { MatDialog } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorDialogComponent } from 'app/pages/helpers/dialogs/error-dialog/error-dialog.component';


@Injectable()
export class DataService {
  message = '';
  messageType = 'danger';

  user: any;


  constructor(private router: Router, private rest: RestApiService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.message = '';
      }
    });
  }

  error (message) {
    this.messageType = 'danger';
    this.message = message;
  }

  success (message) {
    this.messageType = 'success';
    this.message = message;
  }

  warning (message) {
    this.messageType = 'warning';
    this.message = message;
  }

  async getProfile () {
    try {
      if (localStorage.getItem('token')) {
        const data = await this.rest.get(
          'https://sprucemvp-api.herokuapp.com/profile',
        );
        this.user = data;
        console.log(data)
      }
    } catch (e) {
      this.error('failed to load data!! login first');
    }
  }
  logout () {

    localStorage.setItem('token', '[]');
  }


}

export class ErrorHandlerService {
  public errorMessage: string = '';
  public dialogConfig;

  constructor(private router: Router, private dialog: MatDialog) { }

  public handleError (error: HttpErrorResponse) {
    if (error.status === 500) {
      this.handle500Error(error);
    }
    else if (error.status === 404) {
      this.handle404Error(error)
    }
    else {
      this.handleOtherError(error);
    }
  }

  private handle500Error (error: HttpErrorResponse) {
    this.createErrorMessage(error);
    this.router.navigate(['/500']);
  }

  private handle404Error (error: HttpErrorResponse) {
    this.createErrorMessage(error);
    this.router.navigate(['/404']);
  }

  private handleOtherError (error: HttpErrorResponse) {
    this.createErrorMessage(error);
    this.dialogConfig.data = { 'errorMessage': this.errorMessage };
    this.dialog.open(ErrorDialogComponent, this.dialogConfig);
  }

  private createErrorMessage (error: HttpErrorResponse) {
    this.errorMessage = error.error ? error.error : error.statusText;
  }
}
