import { Component, OnInit } from '@angular/core';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-deal-of-week',
  templateUrl: './deal-of-week.component.html',
  styleUrls: ['./deal-of-week.component.css']
})
export class DealOfWeekComponent implements OnInit {
  time: NgbTimeStruct = {hour: 13, minute: 30, second: 0};
  hourStep = 1;
  minuteStep = 15;
  secondStep = 30;
  constructor() { }

  ngOnInit(): void {
  }

}
