import { Component, OnInit, Inject } from '@angular/core';
import { constructor } from 'jquery';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { SuccessDialogComponent } from 'app/pages/helpers/dialogs/success-dialog/success-dialog.component';
import { ErrorHandlerService } from 'app/services/data.service';
import { Company } from 'app/pages/model/createcompany.model';
import { RestApiService } from 'app/services/rest-api.service';
@Component({
  selector: 'app-delete-component',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private location: Location,
    private rest: RestApiService,
    private dialog: MatDialog,
    private errorService: ErrorHandlerService,
    private activeRoute: ActivatedRoute) { }

  private dialogConfig;
  public company: Company;

  ngOnInit () {
    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: {}
    }

    this.getOwnerById();
  }

  public onCancel = () => {
    // this.location.
  }

  private getOwnerById = () => {
    let companyId: string = this.activeRoute.snapshot.params['id'];

    let companyByIdUrl: string = `https://sprucemvp-api.herokuapp.com/company/${companyId}`;

    this.rest.get(companyByIdUrl)
      .then(res => {
        this.company = res as Company;
      },
        (error) => {
          this.errorService.dialogConfig = this.dialogConfig;
          this.errorService.handleError(error);
        })
  }

  public deleteOwner = () => {
    let deleteUrl: string = `https://sprucemvp-api.herokuapp.com/company/${this.company._id}`;
    this.rest.delete(deleteUrl)
      .then(res => {
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);

        dialogRef.afterClosed()
          .subscribe(result => {
            // this.location.back();
          });
      },
        (error) => {
          this.errorService.dialogConfig = this.dialogConfig;
          this.errorService.handleError(error);
        })
  }

}
