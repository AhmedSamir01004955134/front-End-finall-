

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShopingServesService } from 'src/app/core/searvs/shoping-serves.service';

@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.css']
})
export class CreatComponent implements OnInit {

  form!: FormGroup;

  constructor(
    public postService:ShopingServesService ,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),

    });
  }
  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.postService.create(this.form.value).subscribe(res => {

         console.log('Post created successfully!');
         this.router.navigateByUrl('shop/index');
    })
  }

}
