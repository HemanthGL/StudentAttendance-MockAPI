import { Component, ViewChild } from '@angular/core';


import { MatRow, MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort'
import { MatPaginator } from '@angular/material/paginator'

import { FormControl, FormGroup } from '@angular/forms'

import { StudentService } from '../student.service';
import { IStudent } from 'src/interfaces/student';

import { Observable, Subject, timer } from 'rxjs'
import { takeUntil, tap, switchMap } from 'rxjs/operators'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild(MatSort) sort!: MatSort;
  
  // @ViewChild(MatTable) sortTab = new MatSort();
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }
  
  setDataSourceAttributes() {
    // this.dataSource.paginator = this.paginator;
    console.log(this.paginator)
    this.dataSource.sort = this.sort;
  }
  // filterInput = new FormControl('')
  form = new FormGroup({
    filterInput: new FormControl
  }
  );
  showFiller = false;
  
  
  displayedColumns: string[] = ['roll', 'name', 'email', 'test'];
  
  studData!: Array<IStudent>;
  dataSource!: MatTableDataSource<IStudent>;
  
  logData(row : MatRow){
    console.log(row);
  }
  
  applyFilter(event: KeyboardEvent){
    let filterValue:string = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }
  
  studStatus!: Array<IStudent>;
  
  constructor(private studServe: StudentService, private router: Router) {}

  // studData: Array<IStudent>;

  getStudData(){
    this.studServe.getStudentData()
    .subscribe((studInfo) => {
      this.studData = studInfo;
    }, (error) => console.log(error))
  }
  ngOnInit(): void {
    // this.studServe.fetchStudentData();
    this.studServe.studStatus.subscribe(data => {
      this.studStatus = data; // I am here
      if (data.length == 0)
        this.studServe.fetchStudentData()
      console.log('dat ais : ', this.studStatus)
      this.dataSource = new MatTableDataSource(this.studStatus)
      this.dataSource.paginator = this.paginator
    });

    // this.studData = this.studStatus.value
    
  }
  
  viewStud(id: number){
    this.router.navigate(['/view/' + id])
  }

}
