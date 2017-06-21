/**
 * Created by Felix on 20.05.2017.
 */
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, Form,} from '@angular/forms';
import {LocalStudent} from './local.model';
import {LocalStudentService} from "./localstudent.service";
import {Router} from "@angular/router";
@Component(
{
  selector: 'app-localstudent',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css'],
  inputs: []
})

export class LocalComponent implements OnInit{
  localForm:FormGroup;
  id:number;
  constructor(private _formBuilder: FormBuilder, private ls:LocalStudentService, private router:Router)
  {}
  ngOnInit(){
    this.localForm=this._formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(2)]],
      surname: [null,[Validators.required, Validators.minLength(2)]],
      age:[null,[Validators.required]],
      city:[null,[Validators.required]],
      phoneNumber:[null, Validators.required],
      country:[],
      gender:["female", Validators.required],
      emailAddress:[null, [Validators.required]],
      studySubject:[null, Validators.required],
      firstLanguage:[null, Validators.required],
      secondLanguage:[null, Validators.required],
      thirdLanguage:[null],
      preferredGender: ["male", Validators.required],
      twoBuddies:[false, Validators.required],
      pastExchangeSemester:[],
      futureExchangeSemester:[],
      preferences:[],
      comments:[]

    });
    this.localForm.markAsTouched();
    var length=this.ls.getLocalStudents().length;
    this.id=length;
}
  onSubmit() {
    console.log(this.localForm.value);
    const localStudent: LocalStudent = this.localForm.value;
    localStudent.id = this.id;
    try {
      this.ls.addLocalStudent(localStudent);
    } catch (ex) {
      console.log(ex.toString())
    }
    this.id++;
    this.router.navigate(['submitted']).catch(reason => {
      console.log(reason);
    });
  }



}
