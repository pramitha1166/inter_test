import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  

}
