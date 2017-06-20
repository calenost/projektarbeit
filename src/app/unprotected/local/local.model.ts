/**
 * Created by Felix on 20.05.2017.
 */
export class LocalStudent {

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }
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


  get phoneNumber(): string {
    return this._phoneNumber;
  }

  set phoneNumber(value: string) {
    this._phoneNumber = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
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

  get thirdLanguage(): string {
    return this._thirdLanguage;
  }

  set thirdLanguage(value: string) {
    this._thirdLanguage = value;
  }

  get preferredGender(): string {
    return this._preferredGender;
  }

  set preferredGender(value: string) {
    this._preferredGender = value;
  }

  get twoBuddies(): boolean {
    return this._twoBuddies;
  }

  set twoBuddies(value: boolean) {
    this._twoBuddies = value;
  }

  get pastExchangeSemester(): string {
    return this._pastExchangeSemester;
  }

  set pastExchangeSemester(value: string) {
    this._pastExchangeSemester = value;
  }

  get futureExchangeSemester(): string {
    return this._futureExchangeSemester;
  }

  set futureExchangeSemester(value: string) {
    this._futureExchangeSemester = value;
  }

  get preferences(): string {
    return this._preferences;
  }

  set preferences(value: string) {
    this._preferences = value;
  }

  get comments(): string {
    return this._comments;
  }

  set comments(value: string) {
    this._comments = value;
  }
  private _id: number;
  //personal data

  private _name: string;
  private _surname: string;
  private _age: number;
  private _city: string;
  private _phoneNumber: string;
  private _country: string;
  private _gender: string;
  private _emailAddress: string;
  private _studySubject: string;

  //language Experience
  private _firstLanguage: string;
  private _secondLanguage: string;
  private _thirdLanguage: string;

  //Buddy Preferences
  private _preferredGender: string;
  private _twoBuddies:boolean;
  private _pastExchangeSemester?: string;
  private _futureExchangeSemester?: string;
  private _preferences?: string;
  private _comments?: string;

  constructor(

  )
  {
  }
}
