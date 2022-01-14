import { Component, OnInit } from '@angular/core';
import { Customer } from '../shared/models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers!: Customer[]
  constructor() { }

  ngOnInit(): void {
  }

}
