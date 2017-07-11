/**
 * Created by Felix on 07.06.2017.
 */
import {EventEmitter, Injectable} from "@angular/core";
import {ExchangeStudent} from "./exchangestudent.model";
import {Headers, Http} from "@angular/http";
//import "rxjs/Rx";
import "rxjs/add/operator/map";
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class ExchangestudentService {

  private exchangeStudents: ExchangeStudent[] = [];
  private currentStudent:ExchangeStudent;

  exchangeStudentsChanged = new EventEmitter<ExchangeStudent[]>();

  constructor(private http: Http, private database: AngularFireDatabase) {

    this.fetchData().subscribe((data) =>
        this.onSuccess(data));
  }
  getCurrentStudent()
  {
    return this.currentStudent;
  }
  setCurrentStudent(id:any)
  {
    this.currentStudent=this.exchangeStudents[id];
  }
  onSuccess(exchangeStudent: any[]) {

    let array:ExchangeStudent[]=[];
    for (let key in exchangeStudent) {
      array=exchangeStudent[key];
      for(let i in array) {
        this.exchangeStudents.push(array[i]);
        this.exchangeStudentsChanged.emit(this.exchangeStudents);
      }
    }

  }

  addExchangeStudent(exchangeStudent: ExchangeStudent) {
    this.exchangeStudents.push(exchangeStudent);
    this.storeData().subscribe();
  }

  getExchangeStudent(id: number) {
    return this.exchangeStudents[id];
  }

  getExchangeStudents() {
    return this.exchangeStudents;
  }

  deleteExchangeStudent(id: number) {
    this.exchangeStudents.splice(id, 1);
    this.exchangeStudentsChanged.emit(this.exchangeStudents);
      }

  storeData() {
    this.database.object('/exchangestudents').remove();
    const body = JSON.stringify(this.exchangeStudents);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('https://projektarbeit-fb86a.firebaseio.com/exchangestudents.json', body, {
      headers: headers
    });
  }


  fetchData() {
    return this.http.get('https://projektarbeit-fb86a.firebaseio.com/exchangestudents.json').map(response => response.json());
  }


}
