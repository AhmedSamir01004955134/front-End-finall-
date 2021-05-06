import { Shop } from './../../../models/shop';
import { ShopingServesService } from './../../../searvs/shoping-serves.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-shope',
  templateUrl: './view-shope.component.html',
  styleUrls: ['./view-shope.component.css']
})
export class ViewShopeComponent implements OnInit {
  id!: number;
  shop!: Shop;
  constructor(
    public postService:ShopingServesService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['shopId'];

    this.postService.find(this.id).subscribe((data: Shop)=>{
      this.shop = data;
    });
  }

}
