import {Student} from "../student.model";
import {LocalStudent} from "../local/local.model";
/**
 * Created by Felix on 19.05.2017.
 */
export interface ExchangeStudent extends Student{
    hostUniversity: string;
  country: string;

  duration?: number;
scoreToLS:[{score:number, LS:LocalStudent}];

  exchangeProgram?: string;

}

