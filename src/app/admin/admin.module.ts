import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home.component';
import { ManageProductComponent } from './manage-product.component';
import { ManageProductDetailComponent } from './manage-product-detail.component';
import { FormsModule } from "@angular/forms";
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  declarations: [AdminHomeComponent, ManageProductComponent, ManageProductDetailComponent]
})
export class AdminModule { }
