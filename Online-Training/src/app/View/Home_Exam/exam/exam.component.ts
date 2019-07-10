import { Component, OnInit } from '@angular/core';
import { Subject } from '../../../Models/Subject';
import { HttpClient } from '@angular/common/http';
import { SubjectService } from '../../../Service/subject.service';


@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  constructor( private subjectService : SubjectService ) { }

  subjects: Subject[];
  selectedSubject: Subject;
  page = 1;
  pageSize = 5;

  ngOnInit() {
    this.subjectService.getJSON().subscribe(data => {
      this.subjects = data;
      console.log(data);
    })
  }

  onSelect(subject: Subject): void {
    this.selectedSubject = subject;
  }
}
