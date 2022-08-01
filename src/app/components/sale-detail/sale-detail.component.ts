import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { CategoryModel } from 'src/app/models/categoryModel';
import { SaleModel } from 'src/app/models/saleModel';
import { ToastrService } from 'ngx-toastr';
import { SaleProductService } from 'src/app/services/sale-product.service';
import { CustomerService } from 'src/app/services/customer.service';
import { ProductService } from 'src/app/services/product.service';
import { CustomerModel } from 'src/app/models/customerModel';
import { ProductModel } from 'src/app/models/productModel';

@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
  styleUrls: ['./sale-detail.component.scss']
})
export class SaleDetailComponent implements OnInit {

  categories: CategoryModel[] = []
  dataSource:MatTableDataSource<SaleModel>
  customers:CustomerModel[] = []
  products:ProductModel[]=[]



  displayedColumns: string[] = ['customerId', 'productId', 'price', 'quantity', 'date', 'action'];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private toastr:ToastrService,
    private saleService:SaleProductService,
    private customerService:CustomerService,
    private productService:ProductService
  ) { }

  ngOnInit(): void {
    this.listSales()
    this.listCustomer()
    this.listProduct()
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  listSales(){
    this.saleService.listSale().subscribe((res)=>{
      this.dataSource = new MatTableDataSource(res.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort
      console.log(res.data);
    })
  }

  listCustomer(){
    this.customerService.listCustomer().subscribe((res)=>{
      this.customers = res.data
    })
  }

  listProduct(){
    this.productService.listProduct().subscribe((res)=>{
      this.products = res.data
      console.log(res.data);
    })
  }

  deleteSale(sale:SaleModel){
    this.saleService.deleteSale(sale).subscribe((res)=>{
      this.toastr.success(res.message);
      this.listSales();
    })
  }





}
