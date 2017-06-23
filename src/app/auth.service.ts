import {User} from "./user.interface";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Subject} from "rxjs/Subject";
import * as firebase from 'firebase/app';
import {AngularFireAuth} from "angularfire2/auth";
import {Observable} from "rxjs/Observable";
 // sagt typescript, dass wir zur runtime eine variable firebase haben, welche in der index.html importiert wird
/**
 * Created by Felix on 07.06.2017.
 */
@Injectable()
export class AuthService {

  constructor(private router:Router , public afAuth: AngularFireAuth)
  {

  }
  signupUser(user:User)
  {
    this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password)
      .catch(function(error){
        console.log(error)
      })
  }
  signinUser(user:User) {
    this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password)
      .catch(function(error){
        console.log(error);
      })
  }
  logout(){
    this.afAuth.auth.signOut();
    this.router.navigate(['signin']);
  }
isAuthenticated()
{
 const state= new Subject<boolean>();
  this.afAuth.auth.onAuthStateChanged(function(user){
    if(user){
      state.next(true);
    }else{
      state.next(false);
    }
  });
  return state.asObservable();

}


}
