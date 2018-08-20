import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductModel } from '../models/product-model';


@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  constructor(private service:ProductService) { }
  productList:any[];
  selectedModel:ProductModel;
  ngOnInit() {
    this.refresh();
  }
  refresh() {
    this.selectedModel = new ProductModel(0,"",0,0);
    this.service.getAll().subscribe((response)=>{
      this.productList = response as any;
    })
  }
  addNew() {
    this.selectedModel = new ProductModel(0,"",0,0);
  }
  create(event) {
    console.log("Create called", event.value);
    this.service.create(event.value).subscribe({
      complete: () => {
        this.refresh();
        }
      });
      
  }
  update(event) {
    console.log("Update called", event.value);
    this.service.create(event.value).subscribe({
      complete: () => {
        this.refresh();
        }
      });
      
  }
  delete(event) {
    let id = event.value;
    this.service.remove(id).subscribe({
      complete:() => {
        this.refresh();
      }
    });
  }
}
