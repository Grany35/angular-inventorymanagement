import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/models/categoryModel';
import { CategoryService } from 'src/app/services/category.service';
import { DialogComponent } from '../home/dialog/dialog.component';
import { CustomerDialogComponent } from '../productadd-dialog/customer-dialog.component';
import { SaleDialogComponent } from '../sale-dialog/sale-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  categories:CategoryModel[] = []


  constructor(
    private dialog:MatDialog,
    private categoryService:CategoryService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getListCategory()
  }



  openCustomerDialog() {
    this.dialog.open(CustomerDialogComponent, {
      width:'30%'
    });
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width:'30%'
    });
  }

  openSaleDialog() {
    this.dialog.open(SaleDialogComponent, {
      width:'40%'
    });
  }

  getListCategory(){
    this.categoryService.getList().subscribe((res)=>{
      this.categories = res.data;
      console.log(res.data);
    })
  }

  goHome(){
    this.router.navigateByUrl('');
  }



}
