import {Component, EventEmitter, OnInit} from "@angular/core";
import {ExchangeStudent} from "./exchangestudent.model";
import {ExchangestudentService} from "./exchangestudent.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-exchangestudent-list',
  templateUrl: './exchangestudent-list.component.html',
  styles: [`
  .grey-border {border: 1px solid green;}
  `]
})
export class ExchangestudentListComponent implements OnInit {
  exchangeStudents: ExchangeStudent[];
  attachStyle=false;

  constructor(private exchangeStudentService: ExchangestudentService, private router:Router) {
  }

  ngOnInit() {
    this.exchangeStudents = this.exchangeStudentService.getExchangeStudents();
    this.exchangeStudentService.exchangeStudentsChanged.subscribe((exchangeStudents: ExchangeStudent[]) => this.exchangeStudents = exchangeStudents);
  }
  matchExchangestudent(id)
  {
    this.attachStyle=true;
    this.exchangeStudentService.setCurrentStudent(id);
  }
  navigateToLink(options)
  {
    this.router.navigate(options).catch(reason => {
      console.log(reason);
    });
  }
}
