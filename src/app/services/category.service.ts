import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from '../models/categoryModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    @Inject('apiUrl') private apiUrl:string,
    private httpClient:HttpClient
  ) { }


    getList():Observable<ListResponseModel<CategoryModel>>{
      let api = this.apiUrl + "Categories/listcategory";
      return this.httpClient.get<ListResponseModel<CategoryModel>>(api);
    }

    addCategory(category:CategoryModel):Observable<ResponseModel>{
      let api = this.apiUrl + "Categories/addcategory";
      return this.httpClient.post<ResponseModel>(api,category);
    }


}
