import { Pipe, PipeTransform } from '@angular/core';
import { CategoryModel } from '../models/categoryModel';

@Pipe({
  name: 'categoryById'
})
export class CategoryPipe implements PipeTransform {

  transform(categoryId: number, categories: CategoryModel[]): string {
    const category = categories.find(category => category.categoryId === categoryId);
    return category ? category.categoryName : "";
  };

}
