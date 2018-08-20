import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router} from "@angular/router";


import { ProductModel } from '../models/product-model';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  model: ProductModel;

  constructor(private service: ProductService,
    private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {
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
  submit() {
    this.service.create(this.model).subscribe({
      complete: () => {
        console.log("completed");
        this.router.navigate(["/product"]);
      }
    });
  }
}
