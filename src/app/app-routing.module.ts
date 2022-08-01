import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SaleDetailComponent } from './components/sale-detail/sale-detail.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'saledetails',component:SaleDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
