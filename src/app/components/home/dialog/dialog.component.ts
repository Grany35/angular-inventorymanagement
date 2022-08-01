import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {


  addForm:FormGroup


  constructor(
    private customerService:CustomerService,
    private toastr:ToastrService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createAddForm();
  }

  createAddForm(){
    this.addForm = this.formBuilder.group({
      customerName: ["",Validators.required],
      phone: ["",Validators.required]
    })
  }

  addCustomer(){
    if (this.addForm.valid) {
      let customerModel= Object.assign({},this.addForm.value)
      this.customerService.addCustomer(customerModel).subscribe((res)=>{
        this.toastr.success(res.message);
        document.getElementById("closeCustomerAddForm")?.click();
      },(err)=>{
        this.toastr.error(err.error);
      })
    }
  }

}
