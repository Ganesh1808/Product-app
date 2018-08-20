import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router} from "@angular/router";


import { ProductModel } from '../models/product-model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  model: ProductModel;

  constructor(private service: ProductService,
    private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {
    //this.model = new ProductModel(1, "Sample", 10, 10);
    let id = this.route.snapshot.paramMap.get("id");
    console.log(`Selector Id: ${id}`);
    this.service.getDetails(parseInt(id)).subscribe((response) => {
      this.model = response
    });
    //this.model = this.service.getDetails(parseInt(id));
  }
  goBackToList() {
    this.router.navigate(["/product"]);
  }
}
