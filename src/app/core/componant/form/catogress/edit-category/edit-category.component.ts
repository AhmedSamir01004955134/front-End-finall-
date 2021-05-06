import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Catog } from 'src/app/core/models/catog';
import { Shop } from 'src/app/core/models/shop';
import { CategoryServisesService } from 'src/app/core/searvs/category-servises.service';
import { ShopingServesService } from 'src/app/core/searvs/shoping-serves.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  shopList: Shop[]=[];
  id!: number;
  cato!: Catog;
  form!: FormGroup;


  constructor(
    public postService:CategoryServisesService ,
    private route: ActivatedRoute,
    private router: Router
    , public serv:ShopingServesService
  ) { }

  ngOnInit(): void {
    this.serv.getAll().subscribe((data:Shop[])=>{
      this.shopList=data;
      console.log(this.shopList);
    })

    this.id = this.route.snapshot.params['catoId'];

    this.postService.find(this.id).subscribe((data: Catog)=>{
      this.cato = data;
    });
    this.form = new FormGroup({
      id:new FormControl(''),
      name: new FormControl('', [Validators.required]),
      img:new FormControl('',[Validators.required]),
      shopeId:new FormControl('',[Validators.required])

    });
  }
  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.postService.update(this.id, this.form.value).subscribe(res => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('Category/tabble');
    })
  }

}
