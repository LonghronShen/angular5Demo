import { Component, OnInit } from '@angular/core';
import { AuthHttp } from '../Services/AuthHttp';


@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items = [];
  url = 'http://localhost:9460/api/Items';
  constructor(private authHttp: AuthHttp) { }

  ngOnInit() {
    this.authHttp.Get(this.url, null).subscribe(response => {
      this.items = response;
    });
  }
  Detail(item) {
    return;
  }
}
