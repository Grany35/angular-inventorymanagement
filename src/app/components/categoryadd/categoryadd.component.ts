import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CategoryModel } from 'src/app/models/categoryModel';
import { CategoryService } from 'src/app/services/category.service';
import { CustomerDialogComponent } from '../productadd-dialog/customer-dialog.component';

@Component({
  selector: 'app-categoryadd',
  templateUrl: './categoryadd.component.html',
  styleUrls: ['./categoryadd.component.scss']
})
export class CategoryaddComponent implements OnInit {

  categories:CategoryModel[]=[]
  addForm : FormGroup


  constructor(
    private categoryService:CategoryService,
    private toastr:ToastrService,
    private formBuilder: FormBuilder,
    private dialogRef:DialogRef,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.createAddForm();
    this.getListCategory();
  }

  createAddForm(){
    this.addForm = this.formBuilder.group({
      categoryName: ["",Validators.required]
    })
  }

  addCategory(){
    if (this.addForm.valid) {
      let CategoryModel = Object.assign({},this.addForm.value);
      this.categoryService.addCategory(CategoryModel).subscribe((res)=>{
        this.toastr.success(res.message);
        this.dialogRef.close(true);
        document.getElementById("closeDialog")?.click();
        this.dialog.open(CustomerDialogComponent, {
          width:'30%'
        });
      },(err)=>{
        this.toastr.error(err.error);
      })
    }
  }

  getListCategory(){
    this.categoryService.getList().subscribe((res)=>{
      this.categories = res.data;
      console.log(res.data);
    })
  }

}
