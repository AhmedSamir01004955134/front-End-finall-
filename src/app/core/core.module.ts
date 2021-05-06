import {  HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './componant/header/header.component';
import { FooterComponent } from './componant/footer/footer.component';
import { MainComponent } from './componant/main/main.component';
import { HomeComponent } from './componant/home/home.component';
import { ShopComponent } from './componant/shop/shop.component';
import { BartenarComponent } from './componant/bartenar/bartenar.component';
import { HomeColactionComponent } from './componant/home-colaction/home-colaction.component';
import { WomenColactionComponent } from './componant/women-colaction/women-colaction.component';
import { DealOfWeekComponent } from './componant/deal-of-week/deal-of-week.component';
import { HeroSlaidrComponent } from './componant/hero-slaidr/hero-slaidr.component';
import { ManBannerComponent } from './componant/man-banner/man-banner.component';
import { InstagramComponent } from './componant/instagram/instagram.component';
import { LatestBlogComponent } from './componant/latest-blog/latest-blog.component';
import { CatogryComponantComponent } from './componant/catogry-componant/catogry-componant.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddformComponent } from './componant/addform/addform.component';

import { AddshopComponent } from './componant/form/addshop/addshop.component';
import { TabbleShopComponent } from './componant/form/tabble-shop/tabble-shop.component';
import { ViewShopeComponent } from './componant/form/view-shope/view-shope.component';
import { EditShopeComponent } from './componant/form/edit-shope/edit-shope.component';
import { CreatComponent } from './componant/form/creat-shop/creat.component';
import { TabbleComponent } from './componant/form/catogress/tabble/tabble.component';
import { CreatCategoryComponent } from './componant/form/catogress/creat-category/creat-category.component';
import { EditCategoryComponent } from './componant/form/catogress/edit-category/edit-category.component';
import { ViwcatogresComponent } from './componant/form/catogress/viwcatogres/viwcatogres.component';
import { ItemIndexComponent } from './componant/form/itemPhto/item-index/item-index.component';
import { ItemEditComponent } from './componant/form/itemPhto/item-edit/item-edit.component';
import { ComponantComponent } from './componant/componant.component';
import { ItemViewComponent } from './componant/form/itemPhto/item-view/item-view.component';






@NgModule({
  declarations: [HeaderComponent, FooterComponent, MainComponent
    , HomeComponent, ShopComponent, BartenarComponent,
     HomeColactionComponent,WomenColactionComponent,
     DealOfWeekComponent,HeroSlaidrComponent, ManBannerComponent,
     InstagramComponent, LatestBlogComponent, CatogryComponantComponent, AddformComponent, AddshopComponent, TabbleShopComponent, ViewShopeComponent, EditShopeComponent, CreatComponent, TabbleComponent, CreatCategoryComponent, EditCategoryComponent, ViwcatogresComponent, ItemIndexComponent, ItemEditComponent, ComponantComponent, ItemViewComponent],


  imports: [
    FormsModule,
    ReactiveFormsModule,
     CarouselModule ,
    IvyCarouselModule,
    CommonModule,
    CoreRoutingModule,
    NgbModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    HttpClientModule


  ],providers: []

})
export class CoreModule {

}
export class AppModule { }
