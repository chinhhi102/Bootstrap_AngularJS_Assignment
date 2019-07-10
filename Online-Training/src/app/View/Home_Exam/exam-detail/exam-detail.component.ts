import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { QuizService } from '../../../Service/quiz.service';
import { SubjectService } from '../../../Service/subject.service';
import { Quiz } from '../../../Models/Quiz';
import { Subject } from '../../../Models/Subject';


@Component({
  selector: 'app-exam-detail',
  templateUrl: './exam-detail.component.html',
  styleUrls: ['./exam-detail.component.css']
})
export class ExamDetailComponent implements OnInit {

  curentPage = 1;
  curentQuizId: string;
  curentQuiz: Quiz;
  Quizs: Quiz[];
  Question: String;
  Answers: Object;
  Timer: Date;
  subject: Subject;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private location: Location,
    private subjectService : SubjectService
    ) { }

  ngOnInit() {
    this.getQuiz();
    this.Timer = new Date;
    this.subjectService.getJSON().subscribe(data => {
      for(var i = 0; i < data.length; i++){
        if( data[i].Id == this.curentQuizId){
          this.subject = data[i];
          break;
        }
      }
      console.log(this.subject);
    })
  }

  getQuiz() {
    const page = this.route.snapshot.paramMap.get('page');
    const id = this.route.snapshot.paramMap.get('id');
    this.curentPage = +page;
    this.curentQuizId = id;
    this.quizService.getJSON(id.toString())
      .subscribe(quizs => {
        this.Quizs = quizs;
        this.curentQuiz = this.Quizs[+page-1];
        this.Question = this.curentQuiz.Text;
        this.Answers = this.curentQuiz.Answers;
        console.log(this.Answers);
      });
  }
}
