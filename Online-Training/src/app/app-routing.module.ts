import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './View/Manager_User/login/login.component';
import { SignupComponent } from './View/Manager_User/signup/signup.component';
import { GioiThieuComponent } from './View/Common_Page/gioi-thieu/gioi-thieu.component';
import { LienHeComponent } from './View/Common_Page/lien-he/lien-he.component';
import { GopYComponent } from './View/Common_Page/gop-y/gop-y.component';
import { HoiDapComponent } from './View/Common_Page/hoi-dap/hoi-dap.component';
import { ExamComponent } from './View/Home_Exam/exam/exam.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'gioithieu', component: GioiThieuComponent },
  { path: 'lienhe', component: LienHeComponent },
  { path: 'gopy', component: GopYComponent },
  { path: 'hoidap', component: HoiDapComponent },
  { path: 'exam', component: ExamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
