import {Student} from "../student.model";
/**
 * Created by Felix on 20.05.2017.
 */
export interface LocalStudent extends Student{
  //personal data


  city: string;
  phoneNumber: string;
  country: string;


  //language Experience

  thirdLanguage: string;

  //Buddy Preferences

  twoBuddies: boolean;
  pastExchangeSemester?: string;
  futureExchangeSemester?: string;
  preferences?: string;

}
