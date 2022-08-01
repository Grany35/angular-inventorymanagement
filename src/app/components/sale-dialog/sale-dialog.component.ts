import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerModel } from 'src/app/models/customerModel';
import { ProductModel } from 'src/app/models/productModel';
import { CustomerService } from 'src/app/services/customer.service';
import { ProductService } from 'src/app/services/product.service';
import { SaleProductService } from 'src/app/services/sale-product.service';
import { SaleDetailComponent } from '../sale-detail/sale-detail.component';

@Component({
  selector: 'app-sale-dialog',
  templateUrl: './sale-dialog.component.html',
  styleUrls: ['./sale-dialog.component.scss']
})
export class SaleDialogComponent implements OnInit {

  addForm:FormGroup
  products:ProductModel[] = []
  customers:CustomerModel[] = []
  totalPrice:number=0
  product:ProductModel
  selectedValue:number


  constructor(
    private httpClient:HttpClient,
    private toastr:ToastrService,
    private productService:ProductService,
    private saleService:SaleProductService,
    private customerService:CustomerService,
    private formBuilder:FormBuilder,
    private router:Router,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.listProduct();
    this.listCustomer()
    this.createAddForm()

  }

  listProduct(){
    this.productService.listProduct().subscribe((res)=>{
      this.products = res.data
    })
  }

  listCustomer(){
    this.customerService.listCustomer().subscribe((res)=>{
      this.customers = res.data
    })
  }

  addsale(){
    if (this.addForm.valid) {
      let saleModel = Object.assign({},this.addForm.value);
      this.saleService.addSale(saleModel).subscribe((res)=>{
        this.toastr.success(res.message);
        this.dialog.closeAll();
        this.router.navigateByUrl('/saledetails');

      },(err)=>{
        this.toastr.error(err.error);
      })
    }
  }

  createAddForm(){
    this.addForm = this.formBuilder.group({
      productId: ["",Validators.required],
      customerId: ["",Validators.required],
      quantity: ["",Validators.required],

    })
  }

  saleDetail(){
  this.dialog.closeAll()
  this.router.navigateByUrl('/saledetails')
  }




}
