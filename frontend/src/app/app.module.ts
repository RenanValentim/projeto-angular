import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavComponent } from './template/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './view/home/home.component';
import { MydataComponent } from './view/mydata/mydata.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ChangePasswordComponent } from './view/change-password/change-password.component';
import { LoginComponent } from './view/login/login.component';
import { RegisterComponent } from './view/register/register.component';
import { RegisterClockComponent } from './view/register-clock/register-clock.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    MydataComponent,
    ChangePasswordComponent,
    LoginComponent,
    RegisterComponent,
    RegisterClockComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
