import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryModel } from 'src/app/models/categoryModel';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { CategoryaddComponent } from '../categoryadd/categoryadd.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-customer-dialog',
  templateUrl: './customer-dialog.component.html',
  styleUrls: ['./customer-dialog.component.scss']
})
export class CustomerDialogComponent implements OnInit {

  categories:CategoryModel[] = []
  addForm : FormGroup


  constructor(
    private categoryService:CategoryService,
    private formBuilder:FormBuilder,
    private productService:ProductService,
    private toastr:ToastrService,
    private router:Router,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.getListCategory();
    this.createAddForm();
  }

  getListCategory(){
    this.categoryService.getList().subscribe((res)=>{
      this.categories = res.data;
    })
  }

  createAddForm(){
    this.addForm = this.formBuilder.group({
      productName: ["",Validators.required],
      productCategoryId: ["",Validators.required],
      price: ["",Validators.required],
      brand: ["",Validators.required],
      stock: ["",Validators.required],
      location: ["",Validators.required],
      barcodeNumber: [""]
    })
  }

  addProduct(){
    if (this.addForm.valid) {
      let productModel= Object.assign({},this.addForm.value);
      this.productService.addProduct(productModel).subscribe((res)=>{
        this.toastr.success("Ürün ekleme işlemi başarılı")
        document.getElementById("closeDialog")?.click();
        window.location.reload();
      },(err)=>{
        this.toastr.error("Ürün ekleme işlemi hatalı!")
      })
    }
  }

  openCategoryAdd() {
    this.dialog.open(CategoryaddComponent, {
      width:'30%'
    });
  }



}
