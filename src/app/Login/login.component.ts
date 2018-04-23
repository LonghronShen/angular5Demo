import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControlName, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../Services/Login.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  selector: 'app-login',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = null;
  loginError = false;
  constructor(private fb: FormBuilder,
                private loginService: LoginService,
                private  router: Router) {
    if (this.loginService.IsLoggedIn()) {
      this.router.navigate(['']);
    }
    this.loginForm = fb.group({
      userName: [' ', Validators.required],
      userPwd: [' ', Validators.required]
    });
  }

  ngOnInit() {
  }
  /*登陆*/
  Login() {
     this.loginService.LoginByUserNameAndPwd(this.loginForm.value.userName, this.loginForm.value.userPwd)
       .subscribe((response) => {
         if (response['IsSuccess'] === true) {
           if (response['Token'] != null) {
             const token = JSON.parse(response['Token']);
             this.loginService.SetAuth(token['access_token']);
           }
           this.router.navigate(['/home']);
         } else {
           this.loginError = true;
         }
     }, (error) => {
           this.loginError = true;
       });
  }
  /*注册*/
  Regeion() {
    this.loginService.Regeion(this.loginForm.value)
      .subscribe((data) => {
        if (data['IsSuccess'] === true) {
          if (data['Token'] != null) {
            const token = JSON.parse(data['Token']);
            alert(token['access_token']);
            this.loginService.SetAuth(token['access_token']);
            this.router.navigate(['/home']);
          }

        } else {
          alert(data['Message']);
        }
      });
  }

  Logout() {
    this.loginService.LoginOut().subscribe(result => {
        if (result) {
          this.router.navigate([]);
        }
    });

  }
  goto() {
    this.router.navigate(['CommentList']);
  }
}
