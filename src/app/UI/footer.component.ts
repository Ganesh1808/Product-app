import { Component, OnInit } from '@angular/core';

@Component({
  /* selector : the HTML tag that is identified with this component */
  selector: 'app-footer',

  /* templateUrl : the HTML template file location,
    can also be replace with template: 
    either one of the two (templateUrl or template) */
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
