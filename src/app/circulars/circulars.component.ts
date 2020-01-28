import { Component, OnInit } from '@angular/core';
import { Display } from '../shared/display.model';

@Component({
  selector: 'app-circulars',
  templateUrl: './circulars.component.html',
  styleUrls: ['./circulars.component.css']
})
export class CircularsComponent implements OnInit {
  private college : Display[]=[new Display(' ⦿ EXTERNAL INVIGILATOR REQUIREMENT FOR MODEL PRACTICAL EXAM - SEPT 2019'),
    new Display(' ⦿ Congratulations Circular(symposium and others)'),
    new Display(' ⦿ St.Josephs Civil Services Academy(tech)'),
    new Display(' ⦿ AICTE SPONSORED INTERNATIONAL CONFERENCE'),
    new Display(' ⦿ Placement Circular - Total Offers 102'), 
    new Display(' ⦿ Training Course'),
  ];
  private deptList : Display[]=[new Display(' ⦿ Online Feedback Mechanism'),
  new Display(' ⦿ Competition'),
  new Display(' ⦿ Hackathon at SIT'),
  new Display(' ⦿ First Year Department Orientation Program Schedule'),
  new Display(' ⦿ Training Course'),
  new Display(' ⦿ Placement Circular - Total Offers 102'), 
];
  private eventList : Display[]=[new Display(' ⦿ National Level Hackathon Dept of CSE'),
  new Display(' ⦿ Making Money From Money'),
  new Display(' ⦿ Photonics Lectures Talk'),
  new Display(' ⦿ TECHNOLATE 2020'),
  new Display(' ⦿ Health Systems Engineering'),
  new Display(' ⦿ Training Course'),

];
  constructor() { }

  ngOnInit() {
  }

}
