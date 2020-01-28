import { Component, OnInit, Input } from '@angular/core';
import { Email } from 'src/app/shared/email.model';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css']
})
export class EmailListComponent implements OnInit {
  @Input() email: Email;
  constructor() { }

  ngOnInit() {
  }

}
