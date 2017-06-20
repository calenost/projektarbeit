import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from "@angular/core";
import {AngularFireModule} from "angularfire2";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ExchangestudentComponent} from "./unprotected/exchangestudent/exchangestudent.component";
import {LocalComponent} from "./unprotected/local/local.component";
import {AppComponent} from "./app.component";
import {
  MdButtonModule,
  MdCardModule,
  MdChipsModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdRadioModule,
  MdSlideToggleModule,
  MdToolbarModule
} from "@angular/material";
import {HeaderComponent} from "./header.component";
import {routing} from "./app.routing";
import {AdminComponent} from "./admin/admin.component";
import {SigninComponent} from "./unprotected/signin.component";
import {SignupComponent} from "./unprotected/signup.component";
import {AuthService} from "./auth.service";
import {AdminGuard} from "./admin/admin.guard";
import {ExchangestudentService} from "./unprotected/exchangestudent/exchangestudent.service";
import {ExchangestudentListComponent} from "./unprotected/exchangestudent/exchangestudent-list.component";
import {ExchangestudentItemComponent} from "./unprotected/exchangestudent/exchangestudent-item.component";
import {environment} from "../environments/environment";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";
import { LocalListComponent } from './unprotected/local/local-list.component';
import {LocalStudentService} from "./unprotected/local/localstudent.service";
//import {hammerjs} from 'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.js';
/*
 export const firebaseconfig = {     // Initialize Firebase
 apiKey: "AIzaSyDE4OQX1XtiFcZI6qHRfiaQjw0XMHtGbus",
 authDomain: "projektarbeit-fb86a.firebaseapp.com",
 databaseURL: "https://projektarbeit-fb86a.firebaseio.com",
 projectId: "projektarbeit-fb86a",
 storageBucket: "projektarbeit-fb86a.appspot.com",
 messagingSenderId: "135842828834"
 };
 */

@NgModule({
  declarations: [
    LocalComponent,
    AppComponent,
    HeaderComponent,
    AdminComponent,
    SigninComponent,
    SignupComponent,
    ExchangestudentComponent,
    ExchangestudentListComponent,
    ExchangestudentItemComponent,
    LocalListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MdGridListModule,
    MdButtonModule,
    MdRadioModule,
    MdInputModule,
    MdToolbarModule,
    MdIconModule,
    MdChipsModule,
    MdCardModule,
    MdSlideToggleModule,
    HttpModule
  ],
  exports: [
    BrowserAnimationsModule,
    MdGridListModule,
    MdButtonModule,
    MdRadioModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdInputModule
  ],
  providers: [AuthService, AdminGuard, ExchangestudentService, LocalStudentService],

  bootstrap: [AppComponent]
})
export class AppModule {
}
