import { Component, OnInit } from '@angular/core';
import { Login } from '../Model/Login';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = ''

  constructor(private service: UserServiceService, private router: Router) { }

  ngOnInit(): void {
  }


  login() {
   
    const loginUserData: Login = {
      email: this.email
    }

    this.service.logiin(loginUserData).subscribe(res => {
      console.log(res)
      if(res.isLogged) {
        alert('login success')
        localStorage.setItem("user", JSON.stringify(res.user));
        this.router.navigate(['/listall'])
      }else {
        alert('email not found')
      }
      

    }) 

  }

}
