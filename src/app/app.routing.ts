import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddcompaniesComponent } from './pages/cruds/addcompanies/addcompanies.component';
import { AddjobsComponent } from './pages/cruds/addjobs/addjobs.component';
import { ViewstaffsComponent } from './pages/views/viewstaffs/viewstaffs.component';
import { ViewClients } from './pages/views/viewclients/viewclients.component';
import { ViewPostedJobsComponent } from './pages/views/viewpostedjobs/viewpostedjobs.component';
import { BookedJobsComponent } from './pages/views/viewbookedjobs/bookedjobs.component';
import { ProfileComponent } from './pages/edits/editprofile/profile.component';
import { EditcompanyComponent } from './pages/edits/editcompany/editcompany.component';
import { UpdatejobComponent } from './pages/edits/editjob/updatejob.component';
import { EditstaffComponent } from './pages/edits/editstaff/editstaff.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ForgetpasswordComponent } from './pages/auth/forgetpassword/forgetpassword.component';
import { NotFoundComponent } from './pages/helpers/not-found/not-found.component';
import { ServerErrorComponent } from './pages/helpers/server-error/server-error.component';
import { AuthGuard } from './services/auth.guard';



const routes: Routes = [
 
 
  { path: 'dashboard',
   component: AdminLayoutComponent , 
   canActivate: [AuthGuard],
  
  children: [
    
    {path: '', component: DashboardComponent},
    { path: 'addcompanies', component: AddcompaniesComponent },
  
  { path: 'addjobs', component: AddjobsComponent },
  { path: 'viewstaffs', component: ViewstaffsComponent },
  { path: 'viewclients', component: ViewClients },
  { path: 'viewjobs', component: ViewPostedJobsComponent },
{path: 'bookedjobs',component:BookedJobsComponent},
{ path: 'editprofile', component: ProfileComponent },
{path: 'editcompany/:id', component: EditcompanyComponent },
{path: 'editjob/:id', component: UpdatejobComponent },
{path: 'editstaff/:id', component: EditstaffComponent },
  ]},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  { path: '404', component: NotFoundComponent}, 
  { path: '500', component: ServerErrorComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },


  { path: '**', redirectTo: 'login', pathMatch: 'full'}


];
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }