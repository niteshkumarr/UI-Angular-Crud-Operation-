import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './components/employee/employee.component';
import { MaterialModule } from '././material-module/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestService } from './service/rest.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
