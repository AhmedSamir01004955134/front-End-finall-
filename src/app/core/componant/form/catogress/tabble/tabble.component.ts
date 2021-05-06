import { Component, OnInit } from '@angular/core';
import { Catog } from 'src/app/core/models/catog';
import { CategoryServisesService } from 'src/app/core/searvs/category-servises.service';

@Component({
  selector: 'app-tabble',
  templateUrl: './tabble.component.html',
  styleUrls: ['./tabble.component.css']
})
export class TabbleComponent implements OnInit {
Category:Catog[]=[];
  constructor(public serv:CategoryServisesService) { }

  ngOnInit(): void {
    this.serv.getAll().subscribe((data:Catog[])=>{
      this.Category=data;
      console.log(this.Category)
    })
  }
  deletePost(id:any){
    this.serv.delete(id).subscribe(res => {
         this.Category = this.Category.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }

}
