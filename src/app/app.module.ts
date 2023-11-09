import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { ViewstudComponent } from './viewstud/viewstud.component';
import { ViewStudComponent } from './view-stud/view-stud.component';
import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';
import { AttendanceComponent } from './attendance/attendance.component'

@NgModule({
  declarations: [
    AppComponent,
    ViewstudComponent,
    ViewStudComponent,
    StudentsComponent,
    HomeComponent,
    AttendanceComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
