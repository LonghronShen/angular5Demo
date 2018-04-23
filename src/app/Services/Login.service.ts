import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../Models/User';
import {AuthHttp} from './AuthHttp';
import {observable} from 'rxjs/symbol/observable';

@Injectable()
export  class LoginService {
   authKey = 'auth';
    url = 'http://localhost:9460/api/Account';
   constructor(private httpClient: HttpClient, private authHttp: AuthHttp) { }
   LoginByUserNameAndPwd (name: string, pwd: string) {
     return  this.Login (name, pwd);
   }
   ToUrlEncodedString (data: any) {
      let body = '';
       for (const  key of Object.keys(data)) {
         if (body.length) {
          body += '&';
         }
         body += key + '=';
         body += encodeURIComponent(data[key]);
      }
      alert(body);
      return body;
   }
   private Login(name: string, pwd: string) {

        const data = {
          userName: name,
          userPwd: pwd
        };
       return this.authHttp.Post(this.url,  this.ToUrlEncodedString(data), { headers: new HttpHeaders({
           'Content-Type': 'application/x-www-form-urlencoded'
         })});
   }

   LoginOut(): any {
     this.url = this.url + '/Logout';
    return this.authHttp.Post(this.url, null).map(response => {
      this.SetAuth(null);
      return true;
    }).catch(err => {
      return observable.throw(err);
    });
   }
  SetAuth(auth: any): boolean {
     if (auth) {
        localStorage.setItem(this.authKey, JSON.stringify(auth));
     } else {
       localStorage.removeItem(this.authKey);
     }
     return true;
  }

  GetAuth(): any {
    const authValue = localStorage.getItem(this.authKey);
    if (authValue) {
       return JSON.stringify(authValue);
     } else {
      return null;
    }
  }
  IsLoggedIn(): boolean {
      return localStorage.getItem(this.authKey) != null;
  }
  Regeion(user: User) {
    const loginurl = 'http://localhost:9460/api/Connect/token';
    return this.httpClient.post(loginurl, user );

  }
}
