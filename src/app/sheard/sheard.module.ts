import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadComponent } from './componant/preload/preload.component';
import { NotFoundComponent } from './componant/not-found/not-found.component';



@NgModule({
  declarations: [PreloadComponent, NotFoundComponent],
  imports: [
    CommonModule
  ],
  exports:[PreloadComponent ,NotFoundComponent]
})
export class SheardModule { }
