import {Component, Input, OnInit} from '@angular/core';
import {LocalStudentService} from "../unprotected/local/localstudent.service";
import {ExchangestudentService} from "../unprotected/exchangestudent/exchangestudent.service";
import {Nodemailer} from 'nodemailer';
import {ExchangestudentListComponent} from "../unprotected/exchangestudent/exchangestudent-list.component";
import {LocalListComponent} from "../unprotected/local/local-list.component";
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 esId:any=-1;
 lsId:any=-1;
  constructor(private ls:LocalStudentService, private es: ExchangestudentService) { }
match()
{
  this.lsId=this.ls.getCurrentStudent().id;
  this.esId=this.es.getCurrentStudent().id;

 if ((this.esId>=0)&&(this.lsId>=0))
 {
   console.log(this.lsId);
  console.log(this.esId);
  this.sendMail(this.esId,this.lsId);
 }
}
  sendMail(esId, lsId)
  {
    console.log(esId+lsId)
    let exchangeStudent=this.es.getExchangeStudent(esId);
    let localStudent=this.ls.getLocalStudent(lsId);
    const nodemailer:Nodemailer=new Nodemailer();
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
      from: '"Felix Ebberg" <felix.ebberg@stud.fh-dortmund.de>',
      to: localStudent.emailAddress,
      subject: 'Dein Buddy',
      html: '<strong>Hallo XXXXX</strong>,<br/><br/>bald geht es los, das Wintersemester und das Buddyprogramm für die Erasmus-Studenten starten!<br/>Bei der Auswahl der Buddies haben wir versucht deine Wünsche so gut wie möglich zu erfüllen.<br/><br/>Wir freuen uns dir deinen Buddy vorstellen zu können!<br/><br/><br/>Es ist '+exchangeStudent.name+exchangeStudent.surname+' aus '+exchangeStudent.country+'.<br/>'+exchangeStudent.emailAddress+'<br/><br/>Am besten du nimmst direkt Kontakt auf und schaust, wann sie/er in Deutschland eintrifft.<br/><br/><strong>WICHTIG:</strong> Falls du deinen Buddy nicht abholen kannst, melde dich so schnell wie möglich beim Faculty Exchange Point (fep.business-studies@fh-dortmund.de), damit wir uns darum kümmern können!<br/><br/><br/><br/>Wir machen am 25.08. eine kleine Schulung für die Teilnehmer des Buddyprogramms, damit ihr wisst was auf euch zu kommt, euch untereinander und eure Ansprechpartner kennenlernen könnt.<br/><br/>Die Schulung findet statt am 25.08. um 18:00 Uhr im Raum 0.50 in der EF 44 und wird voraussichtlich 30-60 Minuten dauern abhängig von den Fragen die aufkommen. Falls Interesse besteht bist du herzlich eingeladen mit uns danach den ESN Stammtisch zu besuchen um mehr über das ESN Netzwerk zu erfahren.<br/><br/><br/>Am 13.09. gibt es zudem eine Stadionführung, zu der du dich anmelden kannst! Hierzu bekommst du demnächst eine Email vom International Office.<br/><br/><br/>Im Anhang findest du schon mal einige Informationen.<br/><br/>Alles weitere klären wir am 25.08,<br/><br/><br/>bis dahin viele Grüße<br/><br/><br/><br/>Marvin Hake<br/>ESN Dortmund<br/>dortmund.esn-germany.de'
    };
    transporter.sendMail(HelperOptionsLs, (error, info) => {
      if(error) {
        console.log(error);
      }else {
        console.log("The message was sent!");
        console.log(info);
        this.ls.deleteLocalStudent(lsId);
      }
    });
  }
  ngOnInit() {


  }

}
