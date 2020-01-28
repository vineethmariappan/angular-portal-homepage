import { Component, OnInit, Input } from '@angular/core';
import { Sms } from 'src/app/shared/sms.model';

@Component({
  selector: 'app-sms-list',
  templateUrl: './sms-list.component.html',
  styleUrls: ['./sms-list.component.css']
})
export class SmsListComponent implements OnInit {
  @Input() sms: Sms;
  constructor() { }

  ngOnInit() {
  }

}
