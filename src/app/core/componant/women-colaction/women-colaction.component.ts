import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women-colaction',
  templateUrl: './women-colaction.component.html',
  styleUrls: ['./women-colaction.component.css']
})
export class WomenColactionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  images = [
    {path: 'assets/img/products/women-1.jpg'},
    {path: 'assets/img/products/women-1.jpg'},
    {path: 'assets/img/products/women-1.jpg'},
    {path: 'assets/img/products/women-1.jpg'},



]
images2=[{
  path: 'assets/img/products/women-1.jpg'
}]
onClick(){
  return console.log("ahmed samir")
}
}
