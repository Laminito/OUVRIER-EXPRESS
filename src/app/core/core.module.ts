import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AcceuilSliderComponent} from "./components/acceuil-slider/acceuil-slider.component";



@NgModule({
  declarations: [
    AcceuilSliderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AcceuilSliderComponent
  ]
})
export class CoreModule { }
