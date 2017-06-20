/**
 * Created by Felix on 20.05.2017.
 */
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, Form,} from '@angular/forms';
import {LocalStudent} from './local.model';
@Component(
{
  selector: 'app-localstudent',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css'],
  inputs: []
})

export class LocalComponent implements OnInit{
  localStud:LocalStudent;
  localForm:FormGroup;
  id:number;

  constructor(private _formBuilder: FormBuilder)
  {}
  ngOnInit(){
    this.id=0;
    this.localForm=this._formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(2)]],
      surname: [null,[Validators.required, Validators.minLength(2)]],
      age:[null,[Validators.required, Validators.pattern('/^[1-9]{2}$/')]],
      city:[null,[Validators.required]],
      phoneNumber:[null, Validators.required],
      country:[],
      gender:[null, Validators.required],
      emailAddress:[null, [Validators.required, Validators.email]],
      studySubject:[null, Validators.required],
      firstLanguage:[null, Validators.required],
      secondLanguage:[null, Validators.required],
      thirdLanguage:[null],
      preferredGender: [null, Validators.required],
      twoBuddies:[false, Validators.required],
      pastExchangeSemester:[],
      futureExchangeSemester:[],
      preferences:[],
      comments:[]
    })
}
}
