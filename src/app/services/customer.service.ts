import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerModel } from '../models/customerModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    @Inject('apiUrl') private apiUrl:string,
    private httpClient:HttpClient
  ) { }

    addCustomer(customer:CustomerModel):Observable<ResponseModel>{
      let api = this.apiUrl + "Customer/addcustomer";
      return this.httpClient.post<ResponseModel>(api,customer);
    }

    listCustomer():Observable<ListResponseModel<CustomerModel>>{
      let api = this.apiUrl + "Customer/listcustomer";
      return this.httpClient.get<ListResponseModel<CustomerModel>>(api)
    }



}
