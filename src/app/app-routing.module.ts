import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './Home/home.component';
import {LoginComponent} from './Login/login.component';
import {ItemComponent} from './item/item.component';

const route: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'baidu' , redirectTo: 'http://www.baidu.com'},
  {path: 'ItemComponent', component: ItemComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export  class  AppRoutingModule { }
