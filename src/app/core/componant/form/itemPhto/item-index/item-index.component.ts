
import { Component, OnInit } from '@angular/core';
import { ItemPhto } from 'src/app/core/models/item-phto';

import { ItemPhtoService } from 'src/app/core/searvs/item-phto.service';




@Component({
  selector: 'app-item-index',
  templateUrl: './item-index.component.html',
  styleUrls: ['./item-index.component.css']
})
export class ItemIndexComponent implements OnInit {
itemphot:ItemPhto[]=[];
  constructor(public serv:ItemPhtoService) { }

  ngOnInit(): void {
    this.serv.getAll().subscribe((data:ItemPhto[])=>{
      this.itemphot=data;
      console.log(this.itemphot)
    })
  }
  deleteitem(id:any){
  this.serv.delete(id).subscribe(res=>{
    this.itemphot=this.itemphot.filter(Item=>Item.id!==id);
    console.log('delete successfully');
  })
  }

}
