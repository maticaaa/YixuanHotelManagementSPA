import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/core/services/customer.service';
import { Customer } from 'src/app/shared/models/customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customer!: Customer;
  id: number = 0;
  constructor(private activeRoute: ActivatedRoute, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(
      p => {
        this.id = Number(p.get('id'));
        console.log('movieId= ' + this.id);
        this.customerService.getCustomerDetails(this.id).subscribe(
          c => {
            this.customer = c;
            console.log(this.customer);
          }
        )
      }
    )
  }

}
