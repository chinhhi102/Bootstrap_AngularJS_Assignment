import { Injectable } from '@angular/core';
import { Subject } from '../Models/Subject';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private http: HttpClient) { }

  public getJSON(id: string) : Observable<any> {
    return this.http.get("../../assets/db/Quizs/" + id + ".js");
  }
  
}
