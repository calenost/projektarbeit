/**
 * Created by Felix on 19.05.2017.
 */
export interface ExchangeStudent {

  id: number;

  name: string;
  surname: string;
  age: number;
  gender?: string;
  emailAddress: string;
  studySubject: string;
  hostUniversity: string;
  country: string;

  firstLanguage: string;
  secondLanguage: string;

  duration?: number; // Semesteranzahl in Dortmund
  comments?: string;

  preferredGender: string;
  exchangeProgram?: string;

}

