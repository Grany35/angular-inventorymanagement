import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { ProductModel } from 'src/app/models/productModel';
import {MatTableDataSource} from '@angular/material/table';
import { CategoryModel } from 'src/app/models/categoryModel';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  categories:CategoryModel[] = []
  products:ProductModel[] = []
  dataSource:MatTableDataSource<ProductModel>;
  displayedColumns: string[] = ['productName', 'price', 'brand', 'stock', 'location', 'productCategoryId', 'barcodeNumber', 'action'];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private productService:ProductService,
    private toastr:ToastrService,
    private categoryService:CategoryService
  ) { }

  ngOnInit(): void {
    this.getList()
    this.getListCategory()
  }


  getList(){
    this.productService.listProduct().subscribe((res)=>{
      this.dataSource = new MatTableDataSource(res.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort
      console.log(res.data);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  deleteProduct(product:ProductModel){
    this.productService.deleteProduct(product).subscribe((res)=>{
      this.toastr.success(res.message);
      this.getList();
    },(err)=>{
      this.toastr.error(err.error);
    })
  }

  getListCategory(){
    this.categoryService.getList().subscribe((res)=>{
      this.categories = res.data;
    })
  }















}














