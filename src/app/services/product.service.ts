import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from '../models/categoryModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ProductModel } from '../models/productModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    @Inject('apiUrl') private apiUrl:string,
    private httpClient:HttpClient
  ) { }


   addProduct(product:ProductModel):Observable<ResponseModel>{
    let api = this.apiUrl + "Product/addproduct";
    return this.httpClient.post<ResponseModel>(api,product);
   }

   deleteProduct(product:ProductModel):Observable<ResponseModel>{
    let api = this.apiUrl + "Product/deleteproduct";
    return this.httpClient.post<ResponseModel>(api,product);
   }


   listProduct():Observable<ListResponseModel<ProductModel>>{
    let api = this.apiUrl + "Product/listproduct";
    return this.httpClient.get<ListResponseModel<ProductModel>>(api);
   }

   listCategory():Observable<ListResponseModel<CategoryModel>>{
    let api = this.apiUrl + "Categories/listcategory";
    return this.httpClient.get<ListResponseModel<CategoryModel>>(api);
  }


}
