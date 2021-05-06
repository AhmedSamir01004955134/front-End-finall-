import { Catog } from 'src/app/core/models/catog';
import { Observable } from 'rxjs';
import { ShopingServesService } from './../../../../searvs/shoping-serves.service';
import { Shop } from './../../../../models/shop';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryServisesService } from 'src/app/core/searvs/category-servises.service';

@Component({
  selector: 'app-creat-category',
  templateUrl: './creat-category.component.html',
  styleUrls: ['./creat-category.component.css']
})
export class CreatCategoryComponent implements OnInit {

  form!: FormGroup;
  shopList: Shop[]=[];
  catogList: Catog[]=[];


  constructor(
    public postService: CategoryServisesService, public serv:ShopingServesService,private router: Router
  ) { }


  ngOnInit(): void {
    this.postService.getAll().subscribe((data:Catog[])=>{
      this.catogList=data;
      console.log(this.catogList);
    })

    this.serv.getAll().subscribe((data:Shop[])=>{
      this.shopList=data;
      console.log(this.shopList);
    })
    this.form = new FormGroup({
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
    this.postService.create(this.form.value).subscribe(res => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('Category/tabble');
    })
  }

}
