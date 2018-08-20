import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home.component';
import { ManageProductComponent } from './manage-product.component';
import { ManageProductDetailComponent } from './manage-product-detail.component';
import { AuthenticationGuard } from '../services/authentication.guard';

const routes: Routes = [
  {
    path: "admin",
    canActivate:[AuthenticationGuard],
    children: [
      { path: "product", component: ManageProductComponent },
      { path: "product/:id", component: ManageProductDetailComponent },
      { path: "", component: AdminHomeComponent },
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }