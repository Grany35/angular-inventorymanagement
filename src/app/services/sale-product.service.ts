import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SaleModel } from '../models/saleModel';

@Injectable({
  providedIn: 'root'
})
export class SaleProductService {

  constructor(
    @Inject('apiUrl') private apiUrl:string,
    private httpClient:HttpClient
  ) { }

    addSale(sale:SaleModel):Observable<ResponseModel>{
      let api = this.apiUrl + "Sales/addsale";
      return this.httpClient.post<ResponseModel>(api,sale);
    }

    listSale():Observable<ListResponseModel<SaleModel>>{
      let api = this.apiUrl + "Sales/getlist";
      return this.httpClient.get<ListResponseModel<SaleModel>>(api);
    }

    deleteSale(sale:SaleModel):Observable<ResponseModel>{
      let api = this.apiUrl +"Sales/deletesale";
      return this.httpClient.post<ResponseModel>(api,sale);
    }


}
