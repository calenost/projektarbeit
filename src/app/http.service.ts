/**
 * Created by Felix on 03.06.2017.
 */
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
/**import {Http} from '@angular/http';
import {Injectable} from "@angular/core";
import 'rxjs/Rx';
@Injectable()
export class HttpService {
  constructor(private http:Http)
  {

  }
  sendData(user:any)
  {
    const body= JSON.stringify(user);
    const headers=new Headers({'Content-Type': 'application/json'});
    this.http.post('URL', body, [headers: headers,]).
  }
  getData() {
    return this.http.get('url').map(response: Response) =>{
      const data=response.json();
      const returnArray=[];
      for(let key in data) {
        returnArray.push(data[key]);
      }
      return returnArray;
    }
  }
}
**/
@Injectable()
export class HttpService {
  constructor( private http: Http){
  }
  sendData(){}
}
