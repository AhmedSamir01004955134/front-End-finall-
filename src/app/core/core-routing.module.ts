import { ItemViewComponent } from './componant/form/itemPhto/item-view/item-view.component';
import { ItemEditComponent } from './componant/form/itemPhto/item-edit/item-edit.component';

import { ViwcatogresComponent } from './componant/form/catogress/viwcatogres/viwcatogres.component';
import { CreatCategoryComponent } from './componant/form/catogress/creat-category/creat-category.component';
import { CreatComponent } from './componant/form/creat-shop/creat.component';
import { TabbleShopComponent } from './componant/form/tabble-shop/tabble-shop.component';
import { EditShopeComponent } from './componant/form/edit-shope/edit-shope.component';
import { ViewShopeComponent } from './componant/form/view-shope/view-shope.component';
import { AddshopComponent } from './componant/form/addshop/addshop.component';
import { AddformComponent } from './componant/addform/addform.component';
import { ShopComponent } from './componant/shop/shop.component';
import { HomeComponent } from './componant/home/home.component';
import { MainComponent } from './componant/main/main.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabbleComponent } from './componant/form/catogress/tabble/tabble.component';
import { EditCategoryComponent } from './componant/form/catogress/edit-category/edit-category.component';
import { ItemIndexComponent } from './componant/form/itemPhto/item-index/item-index.component';



const routes: Routes = [
  {path:'',component:MainComponent,
  children:[
    {path:'',component:HomeComponent},
    {path:'shop',component:ShopComponent},
    {path:'addform',component:AddformComponent},
    {path:'addshop',component:AddshopComponent},
    {path:'addshop/:shopId/view',component:ViewShopeComponent},
    {path:'addshop/:shopId/edit',component:EditShopeComponent},
    {path:'shop/index',component:TabbleShopComponent},
    {path:'shop/create',component:CreatComponent},
    {path:'Category/tabble',component:TabbleComponent},
    {path:'Category/create', component:CreatCategoryComponent},
    {path:'category/:catoId/edit',component:EditCategoryComponent},
    {path:'category/:catoId/view',component:ViwcatogresComponent},
    {path:'itemPhoto/index',component:ItemIndexComponent},
    {path:'itemPhto/:itemph/edit',component:ItemEditComponent},
    {path:'itemPhto/:itemphid/view',component:ItemViewComponent}


  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
