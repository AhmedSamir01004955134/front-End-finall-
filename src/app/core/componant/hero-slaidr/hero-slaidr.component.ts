import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hero-slaidr',
  templateUrl: './hero-slaidr.component.html',
  styleUrls: ['./hero-slaidr.component.css'],
  providers: [NgbCarouselConfig]
})
export class HeroSlaidrComponent implements OnInit {



  constructor() {

  }

  ngOnInit(): void {
  }

}
