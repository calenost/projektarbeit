/**
 * Created by Felix on 19.05.2017.
 */
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators,} from '@angular/forms';
import {ExchangeStudent} from './exchangestudent.model'

import {AppModule} from '../../app.module';
import {ExchangestudentService} from "./exchangestudent.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-exchangestudent',
  templateUrl: './exchangestudent.component.html',
  styleUrls: ['./exchangestudent.component.css'],
  inputs: []
})
export class ExchangestudentComponent implements OnInit {
  id=0;
  buddyForm:FormGroup;
  constructor(private _formBuilder: FormBuilder, private es:ExchangestudentService, private router:Router) {
  }

/*
    buddyForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl(),
    age: new FormControl(),
    preferredGender: new FormControl(),
    emailAddress: new FormControl(),
    studySubject: new FormControl(),
    hostUniversity: new FormControl(),
    firstLanguage: new FormControl(),
    secondLanguage: new FormControl(),
    duration: new FormControl(),
    comments: new FormControl(),
    gender: new FormControl(),
    exchangeProgram: new FormControl()
  });*/

  onSubmit(){

    console.log(this.buddyForm.value);
    const exchangeStudent:ExchangeStudent=this.buddyForm.value;
    exchangeStudent.id=this.id;
    try {
      this.es.addExchangeStudent(exchangeStudent);
    }catch(ex){ console.log(ex.toString())}
    this.id++;
    this.router.navigate(['submitted']).catch(reason => {
      console.log(reason);
    });

  }


  ngOnInit() {
    this.buddyForm= this._formBuilder.group({
     name: [null, [Validators.required, Validators.minLength(2)]],
     surname: [null, [Validators.required, Validators.minLength(2)]],
     age: [null,[Validators.required]],
     preferredGender: [null, Validators.required],
     emailAddress: [null, [Validators.required]],
     studySubject: [null, Validators.required],
     hostUniversity: [null, Validators.required],
     firstLanguage: [null, Validators.required],
     secondLanguage: [null, Validators.required],
     duration: [],
     comments: [],
     gender: [null,Validators.required],
     exchangeProgram: []});
    this.buddyForm.markAsTouched();
    var length=this.es.getExchangeStudents().length;
    this.id=length;
  }


}
