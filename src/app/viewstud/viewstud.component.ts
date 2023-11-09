import { Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AttendanceService } from '../attendance.service';
import { IPost } from 'src/interfaces/IPost';
import { MatTableDataSource, } from '@angular/material/table';

import { MatSort, Sort, MatSortModule } from '@angular/material/sort'
import { IStudent } from 'src/interfaces/student';


@Component({
  selector: 'app-viewstud',
  templateUrl: './viewstud.component.html',
  styleUrls: ['./viewstud.component.scss']
})
export class ViewstudComponent implements OnInit {


  @ViewChild(MatSort) sort!: MatSort;
  
  // @ViewChild(MatTable) sortTab = new MatSort();
  
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }
  
  setDataSourceAttributes() {
    // this.dataSource.paginator = this.paginator;
    // console.log(this.paginator)
    // this.dataSourcze.sort = this.sort;
  }


  constructor(private route: ActivatedRoute, private attdServe: AttendanceService){}

  id!: number;

  displayedColumns: string[] = ['roll', 'date', 'status'];

  attdData!: Array<IPost>;
  dataSource!: MatTableDataSource<IPost>;

  ngOnInit(){
    this.id = this.route.snapshot.params['id']
    console.log('id is: ', this.id)
  
    this.attdServe.getAttd(this.id).subscribe(data => {
      console.log(data);
      this.attdData = data;
      this.dataSource = new MatTableDataSource([data]);
      const data2 = this.dataSource.data;
      console.log(data2.length)
      console.log(this.dataSource.data + ' is source')
    })

  }

  // AfterViewInit(){
  //   // this.dataSource = new MatTableDataSource(this.attdData)
  // }
}
