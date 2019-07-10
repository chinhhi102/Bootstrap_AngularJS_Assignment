import { Component, OnInit } from '@angular/core';
import { Subject } from '../../../Models/Subject';
import { HttpClient } from '@angular/common/http';
import { SubjectService } from '../../../Service/subject.service';

@Component({
  selector: 'app-danh-muc',
  templateUrl: './danh-muc.component.html',
  styleUrls: ['./danh-muc.component.css']
})

export class DanhMucComponent implements OnInit {
  constructor( private subjectService : SubjectService ) { }

  subjects: Subject[];
  selectedSubject: Subject;

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
