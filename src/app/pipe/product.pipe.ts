import { Pipe, PipeTransform } from '@angular/core';
import { ProductModel } from '../models/productModel';

@Pipe({
  name: 'productPipe'
})
export class ProductPipe implements PipeTransform {

  transform(productId: number, products: ProductModel[]): string {
    const productName = products.find(product => product.productId === productId);
    return productName ? productName.productName : "";
    

  };



}
