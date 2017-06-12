import {Component, OnInit} from "@angular/core";
import {ExchangeStudent} from "./exchangestudent.model";
import {ExchangestudentService} from "./exchangestudent.service";

@Component({
  selector: 'app-exchangestudent-list',
  templateUrl: './exchangestudent-list.component.html',
  styles: []
})
export class ExchangestudentListComponent implements OnInit {
  exchangeStudents: ExchangeStudent[];

  constructor(private exchangeStudentService: ExchangestudentService) {
  }

  ngOnInit() {
    this.exchangeStudents = this.exchangeStudentService.getExchangeStudents();
    this.exchangeStudentService.exchangeStudentsChanged.subscribe((exchangeStudents: ExchangeStudent[]) => this.exchangeStudents = exchangeStudents)
  }

}
