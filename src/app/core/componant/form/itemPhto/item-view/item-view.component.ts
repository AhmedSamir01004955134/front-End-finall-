import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ItemPhto } from 'src/app/core/models/item-phto';
import { ItemPhtoService } from 'src/app/core/searvs/item-phto.service';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {
  id!: number;
  itemPhoto!: ItemPhto;
  constructor(
    public serv:ItemPhtoService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['itemphid'];
    this.serv.find(this.id).subscribe((data: ItemPhto)=>{
      this.itemPhoto = data;

    });
  }

}
