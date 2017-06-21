/**
 * Created by Felix on 07.06.2017.
 */
import {EventEmitter, Injectable} from "@angular/core";
import {LocalStudent} from "./local.model";
import {Headers, Http, Response} from "@angular/http";
import "rxjs/Rx";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";


@Injectable()
export class LocalStudentService {
  private localStudents: LocalStudent[] = [];
  items: FirebaseListObservable<LocalStudent[]>;
  localStudentsChanged = new EventEmitter<LocalStudent[]>();

  constructor(private http: Http, private database: AngularFireDatabase) {
    this.items = database.list('/localstudents');
    this.fetchData().subscribe((data) =>
      this.onSuccess(data));
  }

  onSuccess(local: any[]) {

    let array: LocalStudent[] = [];
    for (let key in local) {
      array = local[key];
      for (let i in array) {
        this.localStudents.push(array[i]);
        this.localStudentsChanged.emit(this.localStudents);
      }
    }
  }

  addLocalStudent(localStudent: LocalStudent) {
    this.localStudents.push(localStudent);
    this.storeData().subscribe();
  }

  getLocalStudent(id: number) {
    return this.localStudents[id];
  }

  getLocalStudents() {
    return this.localStudents;
  }

  deleteLocalStudent(id: number) {
    this.localStudents.splice(id, 1);
  }

  storeData() {
    this.fetchData().subscribe((data) =>
      this.onSuccess(data));
    this.database.object('/localstudents').remove();
    const body = JSON.stringify(this.localStudents);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('https://projektarbeit-fb86a.firebaseio.com/localstudents.json', body, {
      headers: headers
    });
  }


  fetchData() {
    return this.http.get('https://projektarbeit-fb86a.firebaseio.com/localstudents.json').map((response: Response) => response.json());
  }

}
