import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductServiceService } from './services/product-service.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListallComponent } from './listall/listall.component';
import { SingleComponent } from './single/single.component';
import { AppRoutingModule } from './app-routing.module';
import { UserServiceService } from './services/user-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ListallComponent,
    SingleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductServiceService, UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
