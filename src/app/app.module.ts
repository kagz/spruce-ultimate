import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SuccessPageComponent } from './pages/helpers/success/success.component';
import { ErrorComponent } from './pages/helpers/error/error.component';

import { Logger } from './services/logger.service';
import { SettingsService } from './services/settings.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatCardModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';

import { ForgetpasswordComponent } from './pages/auth/forgetpassword/forgetpassword.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';


import { EditstaffComponent } from './pages/edits/editstaff/editstaff.component';
import { BookedJobsComponent } from './pages/views/viewbookedjobs/bookedjobs.component';
import { UpdatejobComponent } from './pages/edits/editjob/updatejob.component';

import { FigurecardComponent } from './pages/helpers/figurecard/figurecard.component';
import { ImagecardComponent } from './pages/helpers/imagecard/imagecard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewClients } from './pages/views/viewclients/viewclients.component';
import { ProfileComponent } from './pages/edits/editprofile/profile.component';
import { EditcompanyComponent } from './pages/edits/editcompany/editcompany.component';
import { ServerErrorComponent } from './pages/helpers/server-error/server-error.component';
import { NotFoundComponent } from './pages/helpers/not-found/not-found.component';
import { ViewstaffsComponent } from './pages/views/viewstaffs/viewstaffs.component';
import { ViewPostedJobsComponent } from './pages/views/viewpostedjobs/viewpostedjobs.component';
import { AddjobsComponent } from './pages/cruds/addjobs/addjobs.component';
import { AddstaffComponent } from './pages/cruds/addstaff/addstaff.component';
import { AddcompaniesComponent } from './pages/cruds/addcompanies/addcompanies.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';

import { ToastrService, ToastrModule } from 'ngx-toastr';
import { MessageComponent } from './pages/helpers/message/message.component';

import { ImageUploadService } from './services/imageupload.service';
import { AuthGuard } from './services/auth.guard';
import { RestApiService } from './services/auth.service';
import { DataService } from './services/data.service';
import { ResetComponent } from './pages/auth/reset/reset.component';
import { ImageuploadComponent } from './pages/helpers/imageupload/imageupload.component';

@NgModule({  
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminLayoutComponent,
    ForgetpasswordComponent,
    LoginComponent,
    RegisterComponent,
    AddcompaniesComponent,
    AddstaffComponent,
    AddjobsComponent,
      ViewPostedJobsComponent,
    ViewstaffsComponent,
    NotFoundComponent,
    ServerErrorComponent,
    ErrorComponent,
    EditcompanyComponent,
    ProfileComponent,
    ViewClients,
    ImagecardComponent,
    FigurecardComponent,
   

    UpdatejobComponent,
    BookedJobsComponent,
    EditstaffComponent,
 MessageComponent,
    SuccessPageComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    HeaderComponent,
    ResetComponent,
    ImageuploadComponent,


  ], 
  
  imports: [
   
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
 FlexLayoutModule,
 MatCardModule,
    AppRoutingModule,
    HttpClientModule
    , ReactiveFormsModule,
    FormsModule,
    NgbModule,
    ImageCropperModule,
    ToastrModule.forRoot()
  ],
  providers: [
   [ SettingsService,
    Logger,
    RestApiService,
    AuthGuard,
    DataService,
    ImageUploadService
    
  ],
   {provide: LocationStrategy, useClass: HashLocationStrategy},
  //  {
  //   // provide: HTTP_INTERCEPTORS,
  //   // // useClass: TokenInterceptor,
  //   // multi: true
  // }
],

entryComponents: [
  SuccessPageComponent,
  ErrorComponent
],

  bootstrap: [AppComponent]
})
export class AppModule { }