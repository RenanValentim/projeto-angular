import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePasswordComponent } from './view/change-password/change-password.component';
import { HomeComponent } from './view/home/home.component';
import { MydataComponent } from './view/mydata/mydata.component';
import { RegisterClockComponent } from './view/register-clock/register-clock.component';

const routes: Routes = [
  {
    path:"", component: HomeComponent
  },
  {
    path:"mydata", component: MydataComponent
  },
  {
    path:"changedata", component: ChangePasswordComponent
  },
  {
    path:"registerclock", component: RegisterClockComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
