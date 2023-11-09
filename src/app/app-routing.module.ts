import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewstudComponent } from './viewstud/viewstud.component';
import { StudentService } from './student.service';
import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';
import { AttendanceComponent } from './attendance/attendance.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'view/:id',
    component: ViewstudComponent
  },
  {
    path: 'attendance',
    component: AttendanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
