import { Component, OnInit, Input } from '@angular/core';
import { Display } from 'src/app/shared/display.model';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent implements OnInit {
  @Input() private content : Display;
  constructor() { }

  ngOnInit() {
  }

}
