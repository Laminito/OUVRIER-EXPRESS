import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AcceuilSliderComponent} from "./core/components/acceuil-slider/acceuil-slider.component";

const routes: Routes = [
  {
    path:'home',component:AcceuilSliderComponent
  },
  {
    path:'login', loadChildren: () => import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'admin', loadChildren:() => import('./admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path:'client', loadChildren:() => import ('./client/client.module').then(m=> m.ClientModule)
  },

  {
    path:'**' , pathMatch: "full" ,redirectTo:'home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
