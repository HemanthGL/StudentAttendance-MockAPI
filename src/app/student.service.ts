import { Injectable, OnInit } from '@angular/core';
import { Observable, ReplaySubject, BehaviorSubject, shareReplay } from 'rxjs'
import { IStudent } from '../interfaces/student'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators'
import { IAddStud } from 'src/interfaces/IAddStud';
import { IPost } from 'src/interfaces/IPost';

@Injectable({
  providedIn: 'root'
})
export class StudentService implements OnInit {

  constructor(private http: HttpClient) {}
  url: string = "https://654b28e85b38a59f28ee991b.mockapi.io/studattd/api/v1/student"

  private studentURL: string = "https://654b28e85b38a59f28ee991b.mockapi.io/studattd/api/v1/student"

  public readonly studStatusObs$: BehaviorSubject<Array<IStudent>> = new BehaviorSubject<Array<IStudent>>([])

  ngOnInit() {}

  fetchStudentData() {
    this.http.get<Array<IStudent>>(this.studentURL).pipe(shareReplay(1))
      .subscribe(
        (value) => { this.studStatusObs$.next(value) },
        (err) => { console.error("error")},
        () => { console.log("execn. completed")}
      )
  }

  get studStatus(): Observable<Array<IStudent>> {
    return this.studStatusObs$.asObservable();
  }



  addStud(o: IAddStud):void {
    console.log('object here is')
    console.log(typeof(o))
    console.log(o)
    
    this.http.post(this.studentURL, o).subscribe(resp => {
      console.log(resp);
      this.fetchStudentData();
    })

    
  }

  // addStud(obj: IAddStud): 





  private _studentData$ = new ReplaySubject<Array<IStudent>>(1);

  // constructor(private http: HttpClient) { }

  getStudentData(): Observable<Array<IStudent>> {
    this.refreshStudentData();
    
    return this._studentData$.asObservable();
  }

  refreshStudentData(): Observable<void> {
    return this.http.get<any>(this.url).pipe(
      tap((response:any) => {
        this._studentData$.next(response)
      })
    )
  }

}
