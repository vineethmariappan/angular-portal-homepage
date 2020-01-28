import { Component, OnInit } from '@angular/core';
import { Sms } from '../shared/sms.model';
import { Email } from '../shared/email.model';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  private sms: Sms[]=[
    new Sms('Internal Assessment Examination - IV','2 days ago','You have Internal Assessment Exam-IV. Timing will be 7.50 A.M to 9.30 A.M.'),
    new Sms('Internal Assessment Examination - III','6 days ago','You have Internal Assessment Exam-III. Timing will be 7.50 A.M to 9.30 A.M.'),
    new Sms('Internal Assessment Examination - II','2 weeks ago','You have Internal Assessment Exam-II. Timing will be 7.50 A.M to 9.30 A.M.'),
    new Sms('Internal Assessment Examination - I','6 days ago','You have Internal Assessment Exam-II. Timing will be 7.50 A.M to 9.30 A.M.'),
    new Sms('Internal Assessment Examination - I','2 weeks ago','You have Internal Assessment Exam-I. Timing will be 7.50 A.M to 9.30 A.M.')
  ]
  private email: Email[]=[
    new Email('Internal Assessment Examination - IV','2 days ago','You have Internal Assessment Exam-IV. Timing will be 7.50 A.M to 9.30 A.M.'),
    new Email('Internal Assessment Examination - III','6 days ago','You have Internal Assessment Exam-III. Timing will be 7.50 A.M to 9.30 A.M.'),
    new Email('Internal Assessment Examination - II','2 weeks ago','You have Internal Assessment Exam-II. Timing will be 7.50 A.M to 9.30 A.M.'),
    new Email('Internal Assessment Examination - I','6 days ago','You have Internal Assessment Exam-I. Timing will be 7.50 A.M to 9.30 A.M.'),
    new Email('Internal Assessment Examination - I','2 weeks ago','You have Internal Assessment Exam-I. Timing will be 7.50 A.M to 9.30 A.M.')
  ]
  constructor() { }

  ngOnInit() {
  }

}
