/**
 * Created by Felix on 19.05.2017.
 */
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators,} from '@angular/forms';
import {ExchangeStudent} from './exchangestudent.model'

import {AppModule} from '../../app.module';
import {ExchangestudentService} from "./exchangestudent.service";


@Component({
  selector: 'app-exchangestudent',
  templateUrl: './exchangestudent.component.html',
  styleUrls: ['./exchangestudent.component.css'],
  inputs: []
})
export class ExchangestudentComponent implements OnInit {
  dummy: ExchangeStudent;
  buddy:ExchangeStudent;
  id: number;
  buddyForm:FormGroup;
  constructor(private _formBuilder: FormBuilder, private es:ExchangestudentService) {

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
    console.log(this.buddyForm.getRawValue())
    this.es.addExchangeStudent(this.buddyForm.value);


    this.dummy= new ExchangeStudent();
    this.dummy.name=this.buddyForm.get('name').value;
    /*this.dummy.name=this.userForm.get("_name").value;
     this.dummy.surname=this.userForm.get("_surname").value;
     this.dummy.age=this.userForm.get("_age").value;
     this.dummy.comments=this.userForm.get("_comments").value;
     this.dummy.duration=this.userForm.get("_duration").value;
     this.dummy.emailAddress=this.userForm.get("_emailAddress").value;
     this.dummy.exchangeProgram=this.userForm.get("_exchangeProgram").value;
     this.dummy.firstLanguage=this.userForm.get("_firstLanguage").value;
     this.dummy.gender=this.userForm.get("_gender").value;
     this.dummy.hostUniversity=this.userForm.get("_hostUniversity").value;
     this.dummy.preferredGender=this.userForm.get("_preferredGender").value;
     this.dummy.secondLanguage=this.userForm.get("_secondLanguage").value;
     this.dummy.studySubject=this.userForm.get("_studySubject").value;*/
    this.dummy.id=this.id;
    this.id++;
    this.save(this.dummy);

  }


  ngOnInit() {

    this.id=0;
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

    this.buddyForm.valueChanges.subscribe(
      (data:any)=>console.log(data)
    );
    this.buddyForm.statusChanges.subscribe(
      (data:any)=>console.log(data)
    );
  }



  save(stud:ExchangeStudent) {
    /*this.item.set({
      name: stud.name,
      surname: stud.surname,
      age:stud.age,
      email: stud.emailAddress,
      gender:stud.gender,
      preferredGender:stud.preferredGender,
      studySubject:stud.studySubject,
      hostUniversity:stud.hostUniversity,
      firstLanguage:stud.firstLanguage,
      secondLanguage:stud.secondLanguage,
      duration:stud.duration,
      comments:stud.comments,
      exchangeProgram:stud.exchangeProgram


    )}*/
  }

}
