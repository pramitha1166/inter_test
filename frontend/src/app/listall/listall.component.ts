import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listall',
  templateUrl: './listall.component.html',
  styleUrls: ['./listall.component.css']
})
export class ListallComponent implements OnInit {

  constructor() { }

  name: string = ''
  price: number = 0
  qty: number = 0
  status: string = 'new'

  ngOnInit(): void {
  }

}
