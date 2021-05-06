import { Catogry } from './../../models/catogry';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-catogry-componant',
  templateUrl: './catogry-componant.component.html',
  styleUrls: ['./catogry-componant.component.css']
})
export class CatogryComponantComponent implements OnInit {
  @Input()
catogry:Catogry={title:''};
  constructor( ) { }

  ngOnInit(): void {
  }

}
