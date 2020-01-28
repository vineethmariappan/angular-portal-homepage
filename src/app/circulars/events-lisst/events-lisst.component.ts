import { Component, OnInit } from '@angular/core';
import { Display } from 'src/app/shared/display.model';

@Component({
  selector: 'app-events-lisst',
  templateUrl: './events-lisst.component.html',
  styleUrls: ['./events-lisst.component.css']
})
export class EventsLisstComponent implements OnInit {
  private content : Display;
  constructor() { }

  ngOnInit() {
  }

}
