import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/product-model';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, ParamMap, Router} from "@angular/router";
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  model : ProductModel;

  constructor(private service: ProductService,
  private router: Router) { }

  ngOnInit() {
    this.model = new ProductModel(0, "",0,0);
  }
  submit() {
    this.service.create(this.model).subscribe({
      complete:() => {
        console.log("completed");
        this.router.navigate(["/product"]);
      }
    });
  }
  goBackToList() {
    this.router.navigate(["/product"]);
  }
}
