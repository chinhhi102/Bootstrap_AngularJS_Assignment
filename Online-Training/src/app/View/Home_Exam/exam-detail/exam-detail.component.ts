import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { QuizService } from '../../../Service/quiz.service';
import { Quiz } from '../../../Models/Quiz';


@Component({
  selector: 'app-exam-detail',
  templateUrl: './exam-detail.component.html',
  styleUrls: ['./exam-detail.component.css']
})
export class ExamDetailComponent implements OnInit {

  curentPage = 1;
  curentQuiz: Quiz;
  Quizs: Quiz[];
  Question: String;
  Answers: Object;
    

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private location: Location ) { }

  ngOnInit() {
    this.getQuiz();
  }

  getQuiz() {
    const page = this.route.snapshot.paramMap.get('page');
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.getJSON(id.toString())
      .subscribe(quizs => {
        this.Quizs = quizs;
        this.curentQuiz = this.Quizs[page];
        this.Question = this.curentQuiz.Text;
        this.Answers = this.curentQuiz.Answers;
        console.log(this.Answers);
      });
  }
}
