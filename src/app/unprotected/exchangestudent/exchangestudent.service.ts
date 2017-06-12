/**
 * Created by Felix on 07.06.2017.
 */
import {EventEmitter, Injectable} from "@angular/core";
import {ExchangeStudent} from "./exchangestudent.model";
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";

@Injectable()
export class ExchangestudentService {
  private exchangeStudents: ExchangeStudent[];
  items: FirebaseListObservable<ExchangeStudent[]>;
  exchangeStudentsChanged = new EventEmitter<ExchangeStudent[]>();

  constructor(private http: Http, database:AngularFireDatabase) {
    this.items=database.list('/items');
  }

  addExchangeStudent(exchangeStudent: ExchangeStudent) {
    this.exchangeStudents.push(exchangeStudent);
  }

  getExchangeStudent(id: number) {
    return this.exchangeStudents[id];
  }

  getExchangeStudents() {
    return this.exchangeStudents;
  }

  deleteExchangeStudent(id: number) {
    this.exchangeStudents.splice(id, 1);
  }

  storeData() {
    const body = JSON.stringify(this.exchangeStudents);
    const headers = new Headers({'Content-Type': 'application/json'});
    this.http.post('https://projektarbeit-fb86a.firebaseio.com/exchangestudents.json', body, {
      headers: headers
    });

  }

  fetchData() {
    this.http.get('https://projektarbeit-fb86a.firebaseio.com/exchangestudents.json').map((response: Response) => response.json())
      .subscribe(
        (exchangeStudents: ExchangeStudent[]) => {
          this.exchangeStudents = exchangeStudents;
          this.exchangeStudentsChanged.emit(this.exchangeStudents);
        }
      );
  }


}