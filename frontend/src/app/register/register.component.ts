import { Component, OnInit } from '@angular/core';
import { User } from '../Model/User';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  firstname: string = ''
  lastname: string = ''
  email: string = ''
  mobile: string = ''
  address: string = ''

  constructor(private service: UserServiceService) { }

  ngOnInit(): void {
  }

  register() {
    const user: User = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      mobile: this.email,
      address: this.address
    }

    this.service.register(user).subscribe(res => {
      console.log(res)
      alert("register success")
    })

  }

}
