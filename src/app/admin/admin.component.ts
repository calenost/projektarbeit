import {Component, OnInit} from "@angular/core";
import {LocalStudentService} from "../unprotected/local/localstudent.service";
import {ExchangestudentService} from "../unprotected/exchangestudent/exchangestudent.service";
import {Nodemailer} from "nodemailer";
import {LocalStudent} from "../unprotected/local/local.model";
import {ExchangeStudent} from "../unprotected/exchangestudent/exchangestudent.model";
import {Angular2Csv} from "angular2-csv";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: []
})
export class AdminComponent implements OnInit {
  esId: any = -1;
  lsId: any = -1;

  constructor(private ls: LocalStudentService, private es: ExchangestudentService) {
  }

  match() {
    this.lsId = this.ls.getCurrentStudent().id;
    this.esId = this.es.getCurrentStudent().id;

    if ((this.esId >= 0) && (this.lsId >= 0)) {
      console.log(this.lsId);
      console.log(this.esId);
      this.sendMail(this.esId, this.lsId);
    }
  }

  sendMail(esId, lsId) {
    console.log(esId + lsId);
    let exchangeStudent = this.es.getExchangeStudent(esId);
    let localStudent = this.ls.getLocalStudent(lsId);

    /* const nodemailer : Nodemailer=new Nodemailer();
     let transporter= nodemailer.createTransport(
     {
     host: "mailout1.fh-dortmund.de",
     secure: true,
     port: 465,
     auth:{
     user:'feebb001',
     pass: ''
     },
     tls: {
     rejectUnauthorized: false
     }
     }
     );
     let HelperOptionsEs= {
     from: ' "Felix Ebberg" <felix.ebberg001@stud.fh-dortmund.de>',
     to: exchangeStudent.emailAddress,
     subject: 'Your Mentor',
     html: 'Dear <strong>'+exchangeStudent.name+'</strong>your time in Germany is about to start in a few weeks. <br/>When finding a buddy for you, we tried to match your wishes as far as possible:<br/><br/>Your buddy is '+localStudent.name+', and his/her address is '+localStudent.emailAddress+'.<br/><br/><p>Please contact each other as soon as possible and tell your buddy about the day of your arrival!<br/>If your buddy is not responding, please tell us or the Faculty Exchange Point (fep.business-studies@fh-dortmund.de) about it! We would like to help you from the first minute.<br/><br/>Have a good trip to Dortmund, we’re looking forward to meet you!<br/>Best wishes,<br/> Marvin Hake<br/>ESN Dortmund<br/>dortmund.esn-germany.de'
     };
     transporter.sendMail(HelperOptionsEs, (error, info) => {
     if(error) {
     console.log(error);
     }else {
     console.log("The message was sent!");
     console.log(info);
     this.es.deleteExchangeStudent(esId);
     }
     });
     let HelperOptionsLs= {
     from: '"Felix Ebberg" <felix.ebberg001@stud.fh-dortmund.de>',
     to: localStudent.emailAddress,
     subject: 'Dein Buddy',
     html: '<strong>Hallo'+localStudent.name+'</strong>,<br/><br/>bald geht es los, das Wintersemester und das Buddyprogramm für die Erasmus-Studenten starten!<br/>Bei der Auswahl der Buddies haben wir versucht deine Wünsche so gut wie möglich zu erfüllen.<br/><br/>Wir freuen uns dir deinen Buddy vorstellen zu können!<br/><br/><br/>Es ist '+exchangeStudent.name+' '+exchangeStudent.surname+' aus '+exchangeStudent.country+'.<br/>'+exchangeStudent.emailAddress+'<br/><br/>Am besten du nimmst direkt Kontakt auf und schaust, wann sie/er in Deutschland eintrifft.<br/><br/><strong>WICHTIG:</strong> Falls du deinen Buddy nicht abholen kannst, melde dich so schnell wie möglich beim Faculty Exchange Point (fep.business-studies@fh-dortmund.de), damit wir uns darum kümmern können!<br/><br/><br/><br/>Wir machen am 25.08. eine kleine Schulung für die Teilnehmer des Buddyprogramms, damit ihr wisst was auf euch zu kommt, euch untereinander und eure Ansprechpartner kennenlernen könnt.<br/><br/>Die Schulung findet statt am 25.08. um 18:00 Uhr im Raum 0.50 in der EF 44 und wird voraussichtlich 30-60 Minuten dauern abhängig von den Fragen die aufkommen. Falls Interesse besteht bist du herzlich eingeladen mit uns danach den ESN Stammtisch zu besuchen um mehr über das ESN Netzwerk zu erfahren.<br/><br/><br/>Am 13.09. gibt es zudem eine Stadionführung, zu der du dich anmelden kannst! Hierzu bekommst du demnächst eine Email vom International Office.<br/><br/><br/>Im Anhang findest du schon mal einige Informationen.<br/><br/>Alles weitere klären wir am 25.08,<br/><br/><br/>bis dahin viele Grüße<br/><br/><br/><br/>Marvin Hake<br/>ESN Dortmund<br/>dortmund.esn-germany.de'
     };
     transporter.sendMail(HelperOptionsLs, (error, info) => {
     if(error) {
     console.log(error);
     }else {
     console.log("The message was sent!");
     console.log(info);
     this.ls.deleteLocalStudent(lsId);
     }
     });*/
  }

  matchGraph() {
    let exchangeStudents: ExchangeStudent[];
    let localStudents: LocalStudent[];
    const result: Map<LocalStudent, ExchangeStudent> = new Map();

    exchangeStudents = this.es.getExchangeStudents();
    localStudents = this.ls.getLocalStudents();
    let AustauschStudent = exchangeStudents;
    let LokalerStudent = localStudents[1];
    let score: number;

    let i = -1;
    let j = -1;


    for (let exchangestudent of exchangeStudents) {
      if (exchangestudent.hostUniversity != 'FH') {
        /*let id = exchangeStudents.indexOf(exchangestudent);
        exchangeStudents.splice(id, 1);*/
      } else {
        i = exchangeStudents.indexOf(exchangestudent);
        exchangestudent.scoreToLS = [{score: null, LS: null}];

        exchangestudent.scoreToLS.splice(0, 1);
        //debugger;
        if (localStudents.length > 0) {

          for (let localstudent of localStudents) {
            j = localstudent.id;
            score = 0;
            if (localstudent.studySubject == exchangestudent.studySubject) {
              score++;
            }
            if (localstudent.preferredGender == exchangestudent.gender) {
              score++;
            }
            if (exchangestudent.preferredGender == localstudent.gender) {
              score++;
            }
            if (exchangestudent.firstLanguage == localstudent.firstLanguage || exchangestudent.firstLanguage == localstudent.secondLanguage || exchangestudent.firstLanguage == localstudent.thirdLanguage || exchangestudent.secondLanguage == localstudent.firstLanguage || exchangestudent.secondLanguage == localstudent.secondLanguage || exchangestudent.secondLanguage == localstudent.thirdLanguage) {
              score++;
            }
            exchangestudent.scoreToLS.push({score: score, LS: localstudent});
          }

          exchangestudent.scoreToLS = exchangestudent.scoreToLS.sort((localScoreOne, localScoreTwo) => {
            if (localScoreOne.score > localScoreTwo.score) {
              return -1
            }
            if (localScoreOne.score < localScoreTwo.score) {
              return 1
            }
            return 0
          })
        }

        if (exchangestudent.scoreToLS[0]) {
          result.set(exchangestudent.scoreToLS[0].LS, exchangestudent);
          j = localStudents.indexOf(exchangestudent.scoreToLS[0].LS);
          localStudents.splice(j, 1);

        }
      }


    }
    this.createCSV(result);


  }

  createCSV(result: Map<LocalStudent, ExchangeStudent>) {
    let ESLS: [{}] = [{}];


    result.forEach(
      (LS, ES) => {
        let matchedStudents =
          {
            ESid: ES.id,
            ESname: ES.name,
            ESsurname: ES.surname,
            ESmail: ES.emailAddress,
            ESage: ES.age,
            ESgender: ES.gender,
            LSid: LS.id,
            LSname: LS.name,
            LSsurname: LS.surname,
            LSmail: LS.emailAddress,
            LSage: LS.age,
            LSgender: LS.gender
          };
        ESLS.push(matchedStudents);
      }
    );

    new Angular2Csv(ESLS, 'MatchedStudents', {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      useBom: false,
      title: "ExchangeID, ExchangeName,ExchangeSurname, ExchangeMail, ExchangeAge, ExchangeGender, LocalID, LocalName, LocalSurname, LocalMail, LocalAge, LocalGender",
      filename: "MatchedStudents",
      headers: ''
    })
  }

  matchGraphBA() {
    let exchangeStudents: ExchangeStudent[];
    let localStudents: LocalStudent[];
    const result: Map<LocalStudent, ExchangeStudent> = new Map();

    exchangeStudents = this.es.getExchangeStudents();
    localStudents = this.ls.getLocalStudents();
    let score: number;

    let languageExp: number = 1;
    let genderExp: number = 1;
    let subjectExp: number = 1;
    let ratingExp: number = 1;
    let i = -1;
    let j = -1;


    for (let exchangestudent of exchangeStudents) {
      if (exchangestudent.hostUniversity != 'FH') {
        /*let id = exchangeStudents.indexOf(exchangestudent);
        exchangeStudents.splice(id, 1);*/
      } else {
        i = exchangeStudents.indexOf(exchangestudent);
        exchangestudent.scoreToLS = [{score: null, LS: null}];

        exchangestudent.scoreToLS.splice(0, 1);
        //debugger;
        if (localStudents.length > 0) {

          for (let localstudent of localStudents) {
            j = localstudent.id;
            score = 0;
            if (localstudent.studySubject == exchangestudent.studySubject) {
              score = score + 1 * subjectExp;
            }
            if (localstudent.preferredGender == exchangestudent.gender) {
              score = score + 1 * genderExp;
            }
            if (exchangestudent.preferredGender == localstudent.gender) {
              score = score + 1 * genderExp;
            }
            if (exchangestudent.firstLanguage == localstudent.firstLanguage) {
              score = score + 1 * languageExp;
            }
            if (exchangestudent.firstLanguage == localstudent.secondLanguage) {
              score = score + 1 * languageExp;
            }

            if (exchangestudent.firstLanguage == localstudent.thirdLanguage) {
              score = score + 1 * languageExp;
            }
            if (exchangestudent.secondLanguage == localstudent.firstLanguage) {
              score = score + 1 * languageExp;
            }
            if (exchangestudent.secondLanguage == localstudent.secondLanguage) {
              score = score + 1 * languageExp;
            }
            if (exchangestudent.secondLanguage == localstudent.thirdLanguage) {
              score = score + 1 * languageExp;
            }

            exchangestudent.scoreToLS.push({score: score, LS: localstudent});
          }

          exchangestudent.scoreToLS = exchangestudent.scoreToLS.sort((localScoreOne, localScoreTwo) => {
            if (localScoreOne.score > localScoreTwo.score) {
              return -1
            }
            if (localScoreOne.score < localScoreTwo.score) {
              return 1
            }
            return 0
          })
        }

        if (exchangestudent.scoreToLS[0]) {
          result.set(exchangestudent.scoreToLS[0].LS, exchangestudent);
          j = localStudents.indexOf(exchangestudent.scoreToLS[0].LS);
          localStudents.splice(j, 1);

        }
      }


    }
    this.createCSV(result);


  }

  ngOnInit() {


  }

}
