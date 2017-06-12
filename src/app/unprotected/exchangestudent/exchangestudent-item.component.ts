import {Component, Input, OnInit, Output} from '@angular/core';
import {ExchangeStudent} from "./exchangestudent.model";

@Component({
  selector: 'app-exchangestudent-item',
  templateUrl: './exchangestudent-item.component.html',
  styles: []
})
export class ExchangestudentItemComponent implements OnInit {
@Input() exchangeStudent:ExchangeStudent=null;
  constructor() { }

  ngOnInit() {
  }

}
