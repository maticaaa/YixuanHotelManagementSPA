import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../core/services/customer.service';
import { CustomerCard } from '../shared/models/customerCard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customers!: CustomerCard[];
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe(c => {
      this.customers = c;
    });
  }

}
