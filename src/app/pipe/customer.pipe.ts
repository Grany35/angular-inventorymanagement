import { Pipe, PipeTransform } from '@angular/core';
import { CustomerModel } from '../models/customerModel';

@Pipe({
  name: 'customerPipe'
})
export class CustomerPipe implements PipeTransform {

  transform(customerId: number, customers: CustomerModel[]): string {
    const customerName = customers.find(customer => customer.customerId === customerId);
    return customerName ? customerName.customerName : "";
  };

}
