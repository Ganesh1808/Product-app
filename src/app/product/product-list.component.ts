import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/product-model';
import { ProductService } from '../services/product.service';
import { Observable } from '../../../node_modules/rxjs';
import { ActivatedRoute, ParamMap, Router} from "@angular/router";
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  //productList: ProductModel[];
  productList: any;

  constructor(private service:ProductService,
  private router:Router) { }

  ngOnInit() {
    //this.productList = this.service.getAll();
    this.loadAll();
  }

  loadAll() {
    this.service.getAll().subscribe((response) => {
      this.productList = response as any[];
      console.log("Request returns : ", this.productList);
    })
  }
  delete(id) {
     this.service.remove(id).subscribe({
      complete:() => {
        this.loadAll();
      }
    });
  }
}
