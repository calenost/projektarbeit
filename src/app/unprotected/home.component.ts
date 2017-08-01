import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: '<div class="col-xs-12 text-center">Welcome to the BuddyProgram of the FH Dortmund! Please select if you are either a local Student, or an Exchangestudent, that is going to study here in Dortmund!</div>',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
