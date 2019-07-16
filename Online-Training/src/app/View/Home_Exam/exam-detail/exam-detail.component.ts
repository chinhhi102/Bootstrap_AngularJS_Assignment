import { Component, OnInit, ElementRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { QuizService } from "../../../Service/quiz.service";
import { SubjectService } from "../../../Service/subject.service";
import { Quiz } from "../../../Models/Quiz";
import { Subject } from "../../../Models/Subject";

@Component({
  selector: "app-exam-detail",
  templateUrl: "./exam-detail.component.html",
  styleUrls: ["./exam-detail.component.css"]
})
export class ExamDetailComponent implements OnInit {
  curentPage = 0;
  curentQuizId: string;
  curentQuiz: Quiz;
  Quizs: Quiz[];
  Question: String;
  Answers: Object;
  Timer: Date;
  subject: Subject;
  PAns: {[key: string] : string; } = {};
  length: number;
  sumpoint = 0;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private location: Location,
    private subjectService: SubjectService
  ) { }

  ngOnInit() {
    this.getQuiz();
    this.Timer = new Date();
    this.subjectService.getJSON().subscribe(data => {
      for (var i = 0; i < data.length; i++) {
        if (data[i].Id == this.curentQuizId) {
          this.subject = data[i];
          break;
        }
      }
      console.log(this.subject);
    });
  }

  getQuiz() {
    const id = this.route.snapshot.paramMap.get("id");
    this.curentQuizId = id;
    this.quizService.getJSON(id.toString()).subscribe(quizs => {
      this.Quizs = quizs;
      this.curentQuiz = this.Quizs[this.curentPage];
      this.Question = this.curentQuiz.Text;
      this.Answers = this.curentQuiz.Answers;
      this.length = quizs.length;
    });
  }

  async myFunction(){
    var time_spent = document.getElementById('demo').innerText;
    var container = document.getElementsByClassName('cont')[0];
    container.innerHTML = "";
    container.setAttribute("style","text-align:center; width: 100%; padding: 150px;");
    var H3 = <HTMLHeadingElement>document.createElement("h3");
    H3.innerHTML = this.subject.Name;
    var Result = <HTMLHeadingElement>document.createElement("h3");
    Result.innerHTML = "Result";
    var res = <HTMLParagraphElement>document.createElement("p");
    res.innerHTML = this.sumpoint + "/" + this.Quizs.length;
    var Timer = <HTMLHeadingElement>document.createElement("h3");
    Timer.innerHTML = "Time spent";
    var time = <HTMLParagraphElement>document.createElement("p");
    time.innerHTML = time_spent;
    var Home = <HTMLElement>document.createElement("a");
    Home.setAttribute("style","border: 1px solid gray; background-color: black; color: white; padding: 10px; border-radius: 5px");
    Home.setAttribute("href","home");
    Home.innerHTML = "Home";

    container.appendChild(H3);
    container.appendChild(Result);
    container.appendChild(res);
    container.appendChild(Timer);
    container.appendChild(time);
    container.appendChild(Home);
  }

  async selectAns(){
    var board = document.getElementsByClassName('board');
    board[this.curentPage].setAttribute("style","background-color:gray");
    board[this.curentPage].setAttribute("disabled","disabled");
  }

  async navQuiz(i) {
    var cQ = <HTMLParagraphElement>document.getElementById("Quiz");
    var Az = <HTMLFormElement>document.getElementById("Ans");
    var nQ = <HTMLHeadingElement>document.getElementById("nQ");
    var point = <HTMLSpanElement>document.getElementById("point");
    var board = document.getElementsByClassName('board');
    var Opt = Az.children;
    if(board[i].getAttribute("disabled") == "disabled"){
      return;
    }
    for(var k = 0; k < Opt.length; k++){
      var para = <HTMLInputElement>Opt[k].children[0];
      if(para.checked){
        var key = this.curentQuiz.Id.toString();
        var AnsID = this.curentQuiz['AnswerId'].toString();
        // console.log(this.curentQuiz);
        var value = para.value.toString();
        this.PAns[key] = value;
        if(para.value.toString() == AnsID){
          this.sumpoint++;
          point.innerHTML = this.sumpoint + "/" + this.Quizs.length;
        }
      }
    }
    this.curentPage = i;

    this.curentQuiz = this.Quizs[i];
    this.Answers = this.curentQuiz.Answers;
    var ans = Array.of(this.Answers);
    var res = <HTMLFormElement>document.createElement("form");
    res.id = "Ans";
    for(var k = 0; k < ans.length; k++ ){
      var div = <HTMLDivElement>document.createElement("div");
      var para = <HTMLInputElement>document.createElement("input");
      var key = this.curentQuiz.Id.toString();
      para.type = "radio";
      para.value = ans[k]['Id'];
      if(this.PAns[key] != undefined){
        para.checked = (this.PAns[key] == this.Answers[k]['Id']);
      }
      if(para.checked){
        para.id = "checked";
      }
      div.appendChild(para);
      div.textContent = ans[k]['Text'];
      res.appendChild(div);
    }
    cQ.innerHTML = this.curentQuiz.Text;
    nQ.innerHTML = "Câu hỏi số " + (i + 1);
    Az = res;
  }    
}
