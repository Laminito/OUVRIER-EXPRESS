import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AcceuilSliderComponent} from "./components/acceuil-slider/acceuil-slider.component";
import {NavbarComponent} from "./components/navbar/navbar.component";



@NgModule({
  declarations: [
    AcceuilSliderComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AcceuilSliderComponent
  ]
})
export class CoreModule { }
