import {User} from "./user.interface";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Subject} from "rxjs/Subject";
declare var firebase: any; // sagt typescript, dass wir zur runtime eine variable firebase haben, welche in der index.html importiert wird
/**
 * Created by Felix on 07.06.2017.
 */
@Injectable()
export class AuthService {
  constructor(private router:Router)
  {

  }
  signupUser(user:User)
  {
    firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
      .catch(function(error){
        console.log(error)
      })
  }
  signinUser(user:User) {
    firebase.auth().signInWithEmailAndPassword(user.email,user.password)
      .catch(function(error){
        console.log(error);
      })
  }
  logout(){
    firebase.auth().signOut();
    this.router.navigate(['signin']);
  }
isAuthenticated()
{
 const state= new Subject<boolean>();
  firebase.auth().onAuthStateChanged(function(user){
    if(user){
      state.next(true);
    }else{
      state.next(false);

    }
  });
  return state.asObservable();

}


}
