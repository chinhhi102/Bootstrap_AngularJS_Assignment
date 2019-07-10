import { Injectable } from '@angular/core';
import { Subject } from '../Models/Subject';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { 
    this.getJSON().subscribe(data => {
      console.log(data);
    });
  }
  public getJSON(): Observable<any> {
    return this.http.get("../../assets/db/Subjects.js");
  }
}
