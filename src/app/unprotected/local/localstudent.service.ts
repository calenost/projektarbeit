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
  private currentStudent:LocalStudent;
  items: FirebaseListObservable<LocalStudent[]>;
  localStudentsChanged = new EventEmitter<LocalStudent[]>();

  constructor(private http: Http, private database: AngularFireDatabase) {
    this.items = database.list('/localstudents');
    this.fetchData().subscribe((data) =>
      this.onSuccess(data));
  }
getCurrentStudent()
{
  return this.currentStudent;
}
setCurrentStudent(id:any)
{
  this.currentStudent=this.localStudents[id];
}
  onSuccess(local: any[]) {
    this.localStudents=[];
    let array: LocalStudent[] = [];
    for (let key in local) {
      array = local[key];
      for (let i in array) {
        this.localStudents.push(array[i]);

      }
    }
    this.localStudentsChanged.emit(this.localStudents);
  }

  addLocalStudent(localStudent: LocalStudent) {
    if(localStudent.twoBuddies){
      this.localStudents.push(localStudent);
      localStudent.id=localStudent.id++;
      this.localStudents.push(localStudent);
    }
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
    this.localStudentsChanged.emit(this.localStudents);
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
