import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ItemPhto } from 'src/app/core/models/item-phto';
import { ItemPhtoService } from 'src/app/core/searvs/item-phto.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
id!:number;
itemPhoto!:ItemPhto;
form!:FormGroup;
  constructor(
    public serv:ItemPhtoService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['itemph'];
    this.serv.find(this.id).subscribe((data: ItemPhto)=>{
      this.itemPhoto = data;
    });
    this.form = new FormGroup({
      id:new FormControl(''),
      url: new FormControl('', [Validators.required])
    });
}
get f(){
  return this.form.controls;
}
submit(){
  console.log(this.form.value);
  this.serv.update(this.id, this.form.value).subscribe(res => {
       console.log('Post updated successfully!');
       this.router.navigateByUrl('itemPhoto/index');
  })
}
}
