import { Component, OnInit } from '@angular/core';
import {AuthHttp} from '../Services/AuthHttp';
import {FormBuilder} from '@angular/forms';
import {Items} from '../Models/Items';
import {Router} from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  itemForm = null;
  item: Items;
  constructor(private http: AuthHttp, private  fb: FormBuilder, private router: Router) {
    this.itemForm = fb.group({
      Title: [' '],
      Description: [' '],
      Text: [''],
      UserId: ['f8e8a29e-7061-4c8d-9f19-ad28addf462b']
    });
  }

  ngOnInit() {
  }
  SubmitData() {
      const item = new Items(this.itemForm.value.Title, this.itemForm.value.Description, this.itemForm.value.UserId,  this.itemForm.value.Text);
      this.http.Post('http://localhost:9460/api/Items', item ).subscribe((result) => {
      if ( result === 1) {
         this.router.navigate(['/home']);
      }
    });

  }
}
