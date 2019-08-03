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
import { CustomerService } from './services/newjobs.service';
import { CreateCompanyService } from './services/createcompany.service';
import { ForgetPasswordService } from './services/forgetpassword.service';
import { RegisterService } from './services/register.service';
import { LoginService } from './services/login.service';
import { ApiRequestService } from './services/api-request.service';
import { UserInfoService } from './services/user-info.service';
import { AuthGuard } from './services/auth-guard.service';
import { ToastService } from './services/toast.service';
import { Logger } from './services/logger.service';
import { SettingsService } from './services/settings.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { AppConfig } from 'app-config';
import { ForgetpasswordComponent } from './pages/auth/forgetpassword/forgetpassword.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';


import { EditstaffComponent } from './pages/edits/editstaff/editstaff.component';
import { BookedJobsComponent } from './pages/views/viewbookedjobs/bookedjobs.component';
import { UpdatejobComponent } from './pages/edits/editjob/updatejob.component';

import { FigurecardComponent } from './pages/helpers/figurecard/figurecard.component';
import { ImagecardComponent } from './pages/helpers/imagecard/imagecard.component';

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

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';

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
 
    SuccessPageComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    HeaderComponent

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
 
  ],
  providers: [
   [ SettingsService,
    Logger,
    ToastService,
    AuthGuard,
    UserInfoService,
   AppConfig,
    ApiRequestService,
    LoginService,
    RegisterService,
    ForgetPasswordService,
    CreateCompanyService,
    CustomerService
  ],
   {provide: LocationStrategy, useClass: HashLocationStrategy},
],

entryComponents: [
  SuccessPageComponent,
  ErrorComponent
],

  bootstrap: [AppComponent]
})
export class AppModule { }