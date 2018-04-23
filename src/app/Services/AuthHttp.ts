import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export  class  AuthHttp {
  http = null;
  authkey = 'auth';
 constructor(http: HttpClient) {
   this.http = http;
 }
 ConfigureAuth(option: any) {
   const i = localStorage.getItem(this.authkey);
   if ( i != null) {
     const auth = JSON.parse(i);
     if (auth != null) {
         if (null == option) {
           option = {headers: new HttpHeaders().set('Authorization', 'Bearer ' + auth)};
         }
     }
   }
   return  option;
 }
  Get(url, opts = { }) {
      const opt = this.ConfigureAuth(opts);
      return this.http.get(url, opt);
   }
   Post(url, data, opts = {}) {
     const opt = this.ConfigureAuth(opts);
    if (opt === null) {
      return this.http.post(url, data);
    } else {
      return this.http.post(url, data, opt);
    }


  }

  Put(url, data, opts = {}) {
    this.ConfigureAuth(opts);
    try {
      const  data1 = this.http.put(url, data, opts);
    } catch (e) {
     alert(e.message);
   }
  }

  Delete(url, data, opts = {}) {
   this.ConfigureAuth(opts);
   return this.http.delete(url, opts);
  }
}
