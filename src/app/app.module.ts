import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {FormsModule ,ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { ExchangestudentComponent } from './exchangestudent/exchangestudent.component';
import { AppComponent } from './app.component';
import {MdButtonModule,  MdRadioModule, MdToolbarModule, MdIconModule, MdCardModule, MdGridListModule,  MdInputModule} from '@angular/material';

@NgModule({
  declarations:[
  ExchangestudentComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    MdGridListModule,
    MdButtonModule,
    MdRadioModule,
    MdInputModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,

    HttpModule
  ],
  exports:[
    BrowserAnimationsModule,

    MdGridListModule,
    MdButtonModule,
    MdRadioModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
