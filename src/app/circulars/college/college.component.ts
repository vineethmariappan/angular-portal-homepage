import { Component, OnInit, Input } from '@angular/core';
import { Display } from 'src/app/shared/display.model';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {
  @Input() private content : Display;
  constructor() { }

  ngOnInit() {
  }

}
