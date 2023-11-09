import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IPost } from 'src/interfaces/IPost';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  attdURL: string = "https://654b28e85b38a59f28ee991b.mockapi.io/studattd/api/v1/attendance"
  
  constructor(private http: HttpClient) { }

  postAttd(o: IPost):Observable<any> {
    console.log('object here is')
    console.log(typeof(o))
    console.log(o)
    
    return this.http.post(this.attdURL, o)
    
  }

  getAttd(roll: number): Observable<any>{
    return this.http.get(this.attdURL + "/" + roll.toString());
  }

}
