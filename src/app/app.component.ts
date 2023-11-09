import { Component, ViewChild, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StudentAttendanceMgmt';
  

  navItems = [
    { icon: 'home', name: 'Home', redirect:'/' },
    { icon: 'perm_identity', name: 'Student', redirect: '/students' },
    { icon: 'assignment', name: 'Attendance', redirect: '/attendance' },
    // { icon: 'exit_to_app', name: 'Logout' }
  ];
  
  // 
  // constructor(private studServe: StudentService) {}

  // data! : Array<IStudent>
  // refreshing =  false;

  // private destroyed$ = new Subject();

  // ngOnInit(){
  //   // this.dataSource.paginator = this.paginator;
  //   this.studServe.getStudentData().pipe(
  //     takeUntil(this.destroyed$)
  //   ).subscribe(data => {
  //     this.studServe.refreshStudentData()
  //     console.log('before ' + this.data)
  //     this.data = data
    //   console.log('after ' + this.data);
    // });

    // timer(0, 1000).pipe(
    //   takeUntil(this.destroyed$),
    //   tap(() => this.refreshing = true),
    //   switchMap(() => 
    //     this.studServe.refreshStudentData())
    // ).subscribe(() => {
    //   console.log('refreshed')
    //   console.log(this.data)
    //   this.refreshing = false;
    // })
    
  // }

  // ngOnDestroy(){
  //   this.destroyed$.next(1);
  //   this.destroyed$.complete();
  // }

}
