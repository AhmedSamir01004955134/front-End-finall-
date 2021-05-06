import { ShopingServesService } from './../../../searvs/shoping-serves.service';
import { Shop } from './../../../models/shop';

import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-tabble-shop',
  templateUrl: './tabble-shop.component.html',
  styleUrls: ['./tabble-shop.component.css']
})
export class TabbleShopComponent implements OnInit {
  Shops: Shop[] = [];

  constructor(public postService: ShopingServesService) { }

  ngOnInit(): void {
    this.postService.getAll().subscribe((data: Shop[])=>{
      this.Shops = data;
      console.log(this.Shops);
    })
  }

  deletePost(id:any){
    this.postService.delete(id).subscribe(res => {
         this.Shops = this.Shops.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }

}
