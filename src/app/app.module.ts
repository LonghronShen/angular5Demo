import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent} from './app.component';
import { LoginService} from './Services/Login.service';
import { LoginComponent} from './Login/login.component';
import { AuthHttp} from './Services/AuthHttp';
import { HomeComponent } from './Home/home.component';
import { AppRoutingModule} from './app-routing.module';
import { ItemComponent } from './item/item.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    LoginService,
    AuthHttp
  ]
 ,
  declarations: [
    LoginComponent,
    AppComponent,
    HomeComponent,
    ItemComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

