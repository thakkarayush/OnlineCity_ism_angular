import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailableServiceComponent } from './available-service/available-service.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProviderSignupComponent } from './provider-signup/provider-signup.component';
import { ProviderDashboardComponent } from './provider/provider-dashboard/provider-dashboard.component';
import { ProviderLoginComponent } from './provider/provider-login/provider-login.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { SignupComponent } from './signup/signup.component';
import { UploadProfileComponent } from './upload-profile/upload-profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { AdminComponent } from './admin/admin.component';
import { ListproviderComponent } from './listprovider/listprovider.component';
import { ListusersComponent } from './listusers/listusers.component';

const routes: Routes = [
  {component: HomeComponent,path:"home"},
  {component: SignupComponent,path:"usersignup"},
  {component: LoginComponent,path:"login"},
  {component: LoginComponent,path:""},
  {component: ProviderSignupComponent,path:"providersignup"},
  {component: ForgotPasswordComponent, path:"forgotpassword"},
  {component: UploadProfileComponent, path:"uploadprofile"},
  {component: AvailableServiceComponent, path:"service"},
  {component: ServiceListComponent, path:"listservice"},
  {component: LogoutComponent,path:"logout"},
  {component: ViewProfileComponent,path:"viewprofile"},
  {component: ProviderDashboardComponent,path:"providerdashboard"},
  {component: ProviderLoginComponent, path:"providerlogin"},
  {component:AdminComponent,path:"admin"},
  {component:ListproviderComponent,path:"admin/listprovider"},
  {component:ListusersComponent,path:"admin/listusers"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
