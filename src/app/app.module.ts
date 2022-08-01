import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './components/home/dialog/dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CustomerDialogComponent } from './components/productadd-dialog/customer-dialog.component';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { CategoryPipe } from './pipe/category.pipe';
import { CategoryaddComponent } from './components/categoryadd/categoryadd.component';
import { SaleDialogComponent } from './components/sale-dialog/sale-dialog.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductComponent } from './components/product/product.component';
import { SaleDetailComponent } from './components/sale-detail/sale-detail.component';
import { CustomerPipe } from './pipe/customer.pipe';
import { ProductPipe } from './pipe/product.pipe';
import { CustomerphonePipe } from './pipe/customerphone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogComponent,
    CustomerDialogComponent,
    CategoryPipe,
    CategoryaddComponent,
    SaleDialogComponent,
    NavbarComponent,
    ProductComponent,
    SaleDetailComponent,
    CustomerPipe,
    ProductPipe,
    CustomerphonePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatSelectModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    ReactiveFormsModule,
    ZXingScannerModule,
    FormsModule,
    ToastrModule.forRoot({
      progressBar:true,
      timeOut: 4000
    })
  ],
  providers: [
    {provide: 'apiUrl',useValue:'https://localhost:7157/api/'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
