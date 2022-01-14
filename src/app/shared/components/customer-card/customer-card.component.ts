import { Component, Input, OnInit } from '@angular/core';
import { CustomerCard } from 'src/app/shared/models/customerCard';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent implements OnInit {

  @Input() customerCard!: CustomerCard;

  constructor() { }

  ngOnInit(): void {
  }

}
