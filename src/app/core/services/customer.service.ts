import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/shared/models/customer';
import { CustomerCard } from 'src/app/shared/models/customerCard';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAllCustomers() : Observable<CustomerCard[]>{
    return this.http.get<CustomerCard[]>(environment.apiBaseUrl + 'customers');
  }

  getCustomerDetails(id: number) : Observable<Customer>{
    return this.http.get<Customer>(environment.apiBaseUrl + 'customers/' + id);
  }
}
