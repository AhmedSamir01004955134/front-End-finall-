import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Catog } from 'src/app/core/models/catog';
import { CategoryServisesService } from 'src/app/core/searvs/category-servises.service';

@Component({
  selector: 'app-viwcatogres',
  templateUrl: './viwcatogres.component.html',
  styleUrls: ['./viwcatogres.component.css']
})
export class ViwcatogresComponent implements OnInit {
  id!: number;
  catog!: Catog;
  constructor(
    public postService:CategoryServisesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['catoId'];

    this.postService.find(this.id).subscribe((data: Catog)=>{
      this.catog = data;
    });
  }

}
