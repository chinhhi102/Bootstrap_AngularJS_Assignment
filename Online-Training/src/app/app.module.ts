import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './View/Manager_User/login/login.component';
import { SignupComponent } from './View/Manager_User/signup/signup.component';
import { ForgotPasswordComponent } from './View/Manager_User/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './View/Manager_User/change-password/change-password.component';
import { ChangeInfComponent } from './View/Manager_User/change-inf/change-inf.component';
import { GioiThieuComponent } from './View/Common_Page/gioi-thieu/gioi-thieu.component';
import { LienHeComponent } from './View/Common_Page/lien-he/lien-he.component';
import { GopYComponent } from './View/Common_Page/gop-y/gop-y.component';
import { HoiDapComponent } from './View/Common_Page/hoi-dap/hoi-dap.component';
import { DanhMucComponent } from './View/Home_Exam/danh-muc/danh-muc.component';
import { ExamComponent } from './View/Home_Exam/exam/exam.component';
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    ChangeInfComponent,
    GioiThieuComponent,
    LienHeComponent,
    GopYComponent,
    HoiDapComponent,
    DanhMucComponent,
    ExamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
