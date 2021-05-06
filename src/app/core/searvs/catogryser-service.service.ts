import { Catogry } from './../models/catogry';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatogryserServiceService {

  constructor() { }
  getgatogry() : Catogry[]{
return categoreies;
  }
}
export const categoreies: Catogry[] =[
  {title:'men,s',imeag:{name:'men',path:'assets/img/banner-1.jpg'}},
  {title:'womn,s',imeag:{name:'womn',path:'assets/img/banner-2.jpg'}},
  {title:'Kid,s',imeag:{name:'kid',path:'assets/img/banner-3.jpg'}},
  {title:'sport,s',imeag:{name:'sport ',path:'assets/img/banner-1.jpg'}},

]
