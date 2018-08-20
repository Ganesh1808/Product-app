import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs";
import { ProductModel } from "../models/product-model"

const products: ProductModel[] = [
  {productId:1, productName:"Sample 1", unitPrice:120, unitsInStock: 310},
  {productId:2, productName:"Sample 2", unitPrice:120, unitsInStock: 140},
  {productId:3, productName:"Sample 3", unitPrice:101, unitsInStock: 150},
  {productId:4, productName:"Sample 4", unitPrice:120, unitsInStock: 160},
  {productId:5, productName:"Sample 5", unitPrice:130, unitsInStock: 170},
  {productId:6, productName:"Sample 6", unitPrice:130, unitsInStock: 150},
  {productId:7, productName:"Sample 7", unitPrice:130, unitsInStock: 310},
];

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: ProductModel[];
  constructor(private http: HttpClient) { 
    //this.productList = products;
  }
  productUrl: string = "http://localhost:4300"
  getAll() {
    return this.http.get(this.productUrl);
    //return this.productList;
  }
  getDetails(id: number) {
    let url = this.productUrl + "/getProductById/" + id;
    return this.http.get<ProductModel>(url);
    // let item = this.productList.find((c)=>c.productId==id);
    // return item;
  }
  create(item: ProductModel) {
    //this.productList.push(item);
    let url = this.productUrl+"/addProduct";
    let body = JSON.stringify(item);
    let httpOptions = 
    {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this.http.post(url, body, httpOptions); 
  }
  update(item: ProductModel) {
    //this.productList.push(item);
    let url = this.productUrl+"/addProduct";
    let body = JSON.stringify(item);
    let httpOptions = 
    {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this.http.post(url, body, httpOptions); 
  }
  remove(id: number) {
    let url = this.productUrl + "/deleteProduct/" + id;
    return this.http.delete(url);
  }
}