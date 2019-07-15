import { Component, OnInit } from "@angular/core";
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
    });
  }

  async navQuiz(i) {
    var cQ = document.getElementById("Quiz");
    var Az = document.getElementById("Ans");
    var nQ = document.getElementById("nQ");
    var Az2=document.getElementsByName("answer");
    var Opt = Az.children;   
    for(var k = 0; k < Az2.length; k++){
      var para = Opt[k].children[0];
      //if(Az2[k].checked===true){
      //  alert('Hello');
      //  var key = this.curentQuiz.Id.toString();
      //   var value = para.value.toString();
      //   this.PAns[key] = value;
      }
    this.curentPage = i;

    this.curentQuiz = this.Quizs[i];
    this.Answers = this.curentQuiz.Answers;
    var ans = this.Answers;
    var res = document.createElement("form");
    res.id = "Ans";
    // for(var k = 0; k < ans.length; k++ ){
    //   var div = document.createElement("div");
    //   var para = document.createElement("input");
    //   var key = this.curentQuiz.Id.toString();
    //   para.type = "radio";
    //   para.value = ans[k]['Id'];
    //   if(this.PAns[key] != undefined)
    //     para.checked = (this.PAns[key].toString() == ans[k]['Id'].toString());
    //   if(para.checked)
    //     console.log(ans[k]['Text']);
    //   div.appendChild(para);
    //   div.textContent = ans[k]['Text'];
    //   res.appendChild(div);
    // }
    cQ.innerHTML = this.curentQuiz.Text;
    nQ.innerHTML = "Câu hỏi số " + (i + 1);
    Az = res;
  }
  // storeChoice(){
  //   var cQ = document.getElementById("Quiz");
  //   var Az = document.getElementById("Ans");
  //   var nQ = document.getElementById("nQ");

  // }    
}
