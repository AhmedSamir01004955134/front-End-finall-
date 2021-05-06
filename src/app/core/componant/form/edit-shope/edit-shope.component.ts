import { ShopingServesService } from './../../../searvs/shoping-serves.service';
import { Shop } from './../../../models/shop';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-shope',
  templateUrl: './edit-shope.component.html',
  styleUrls: ['./edit-shope.component.css']
})
export class EditShopeComponent implements OnInit {
  id!: number;
  shop!: Shop;
  form!: FormGroup;

  constructor(
    public postService:ShopingServesService ,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['shopId'];
    this.postService.find(this.id).subscribe((data: Shop)=>{
      this.shop = data;
    });
    this.form = new FormGroup({
      id:new FormControl(''),
      name: new FormControl('', [Validators.required])

    });
  }
  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.postService.update(this.id, this.form.value).subscribe(res => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('shop/index');
    })
  }

}
