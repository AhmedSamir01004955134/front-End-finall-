import { Component, OnInit } from '@angular/core';
import { CatogryserServiceService } from '../../searvs/catogryser-service.service';

@Component({
  selector: 'app-home-colaction',
  templateUrl: './home-colaction.component.html',
  styleUrls: ['./home-colaction.component.css']
})
export class HomeColactionComponent implements OnInit {

  constructor( public serv:CatogryserServiceService) { }

  ngOnInit(): void {
  }

}
