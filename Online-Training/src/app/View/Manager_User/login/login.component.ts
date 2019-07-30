import { Component, OnInit, Directive } from '@angular/core';
import { StudentService } from '../../../Service/student.service';
import { Student } from '../../../Models/Student'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private studentService: StudentService, private router: Router) { }

  students: Student[];

  ngOnInit() {
    this.studentService.getJSON().subscribe(data => {
      this.students = data;
      // console.log(this.students);
    })
    }


  ktLogin() {
    var uname = <HTMLInputElement>document.getElementsByName('uname')[0];
    var psw = <HTMLInputElement>document.getElementsByName('psw')[0];
    var sc = false;
    for (var i = 0; i < this.students.length; i++) {
      var data = this.students[i];
      if(data.username == uname.value && data.password == psw.value){
        alert('Login success!');
        sc = true;
        this.router.navigate(['/exam']);
      }
    }
    if(!sc){
      alert('Login failed!');
      uname.value = psw.value = "";
    }
  }
}
