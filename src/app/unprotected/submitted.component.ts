import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submitted',
  template: '<div class="col-xs-12 text-center"> Thank you for submitting your application, we will let you shortly know who your match will be!</div>',
  styles: []
})
export class SubmittedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
