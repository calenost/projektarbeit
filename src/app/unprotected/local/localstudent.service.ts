/**
 * Created by Felix on 07.06.2017.
 */
import {EventEmitter, Injectable} from "@angular/core";
import {LocalStudent} from "./local.model";
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";



@Injectable()
export class LocalStudentService {
  private localStudents: LocalStudent[]=[];
  items: FirebaseListObservable<LocalStudent[]>;
  localStudentsChanged = new EventEmitter<LocalStudent[]>();

  constructor(private http: Http, database:AngularFireDatabase) {
    this.items=database.list('/localstudents');
    this.fetchData();
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
    const body = JSON.stringify(this.localStudents);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('https://projektarbeit-fb86a.firebaseio.com/localstudents.json', body, {
      headers: headers
    });
  }



  fetchData(){
    this.http.get('https://projektarbeit-fb86a.firebaseio.com/localstudents.json').map((response: Response) => {
      const data =response.json();
      const returnArray=[];
      for (let key in data){
        const array=data[key];
        for (let i in array)
        {
          returnArray.push(array[i]);
        }
      }
      return returnArray}).subscribe(
      (localStudent: LocalStudent[]) => {
        for (let key in localStudent)
        {
          this.localStudents.push(localStudent[key]);
          this.localStudentsChanged.emit(this.localStudents);}
      }
    );
  }


}
