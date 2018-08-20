import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list.component';
import { ProductDetailsComponent } from './product-details.component';
import { ProductEditComponent } from './product-edit.component';
import { ProductCreateComponent } from './product-create.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ],
  declarations: [ProductListComponent, ProductDetailsComponent, ProductEditComponent, ProductCreateComponent],
  exports:[ProductListComponent, ProductDetailsComponent]
})
export class ProductModule { }
