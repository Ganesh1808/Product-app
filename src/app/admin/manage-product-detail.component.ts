import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../models/product-model';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-manage-product-detail',
  templateUrl: './manage-product-detail.component.html',
  styleUrls: ['./manage-product-detail.component.css']
})
export class ManageProductDetailComponent implements OnInit {
  @Input() model : ProductModel;
  @Output() createEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() updateEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
  
  ngOnInit() {

  }

  saveData() {
    if(this.model.productId==0){
      this.createEvent.emit({value : this.model});
    }
    else {
      this.updateEvent.emit({value : this.model});
    }
  }

  delete() {
    this.deleteEvent.emit({value:this.model.productId});
  }

}
