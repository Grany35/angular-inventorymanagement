import { Pipe, PipeTransform } from '@angular/core';
import { CustomerModel } from '../models/customerModel';

@Pipe({
  name: 'customerphone'
})
export class CustomerphonePipe implements PipeTransform {

  transform(customerId: number, customers: CustomerModel[]): string {
    const customerPhone = customers.find(customer => customer.customerId === customerId);
    return customerPhone ? customerPhone.phone : "";

  };

}
