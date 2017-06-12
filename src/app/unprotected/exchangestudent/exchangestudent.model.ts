/**
 * Created by Felix on 19.05.2017.
 */
export class ExchangeStudent {
  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  private _id: number;

  private _name: string;
  private _surname: string;
  private _age: number;
  private _gender?: string;
  private _emailAddress: string;
  private _studySubject: string;
  private _hostUniversity: string;
  private _country: string;

  private _firstLanguage: string;
  private _secondLanguage: string;

  private _duration?: number; // Semesteranzahl in Dortmund
  private _comments?: string;

  private _preferredGender: string;
  private _exchangeProgram?: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get surname(): string {
    return this._surname;
  }

  set surname(value: string) {
    this._surname = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get preferredGender(): string {
    return this._preferredGender;
  }

  set preferredGender(value: string) {
    this._preferredGender = value;
  }

  get emailAddress(): string {
    return this._emailAddress;
  }

  set emailAddress(value: string) {
    this._emailAddress = value;
  }

  get studySubject(): string {
    return this._studySubject;
  }

  set studySubject(value: string) {
    this._studySubject = value;
  }

  get hostUniversity(): string {
    return this._hostUniversity;
  }

  set hostUniversity(value: string) {
    this._hostUniversity = value;
  }

  get firstLanguage(): string {
    return this._firstLanguage;
  }

  set firstLanguage(value: string) {
    this._firstLanguage = value;
  }

  get secondLanguage(): string {
    return this._secondLanguage;
  }

  set secondLanguage(value: string) {
    this._secondLanguage = value;
  }

  get duration(): number {
    return this._duration;
  }

  set duration(value: number) {
    this._duration = value;
  }

  get comments(): string {
    return this._comments;
  }

  set comments(value: string) {
    this._comments = value;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }

  get exchangeProgram(): string {
    return this._exchangeProgram;
  }

  set exchangeProgram(value: string) {
    this._exchangeProgram = value;
  }



  constructor(
  ){


  }
}

