import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserResult } from '../Model/User';
import { Login, LoginResult } from '../Model/Login';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  private api = "http://localhost:8086/api/user"

  register(user: User): Observable<UserResult> {
    return this.http.post<UserResult>(this.api+'/register', user)
  }


  logiin(loginData: Login): Observable<LoginResult> {
    return this.http.post<LoginResult>(this.api+'/login', loginData);
  }

}
