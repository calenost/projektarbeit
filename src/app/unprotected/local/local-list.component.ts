import { Component, OnInit } from '@angular/core';
import {LocalStudent} from "./local.model";
import {Router} from "@angular/router";
import {LocalStudentService} from "./localstudent.service";

@Component({
  selector: 'app-local-list',
  templateUrl: './local-list.component.html',
  styles: []
})
export class LocalListComponent implements OnInit {
  localStudents: LocalStudent[];

  constructor(private localStudentService: LocalStudentService, private router:Router) {
  }

  ngOnInit() {
    this.localStudents = this.localStudentService.getLocalStudents();
    this.localStudentService.localStudentsChanged.subscribe((localStudents: LocalStudent[]) => this.localStudents = localStudents);
  }
  navigateToLink(options)
  {
    this.router.navigate(options).catch(reason => {
      console.log(reason);
    });
  }

}
