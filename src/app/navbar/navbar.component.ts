import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import {MatDialog} from "@angular/material/dialog";
import {InscriptionComponent} from "../inscription/inscription.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  ngOnInit(): void {
  }

  constructor(public modalConnection: MatDialog){

  }
  openDialogLogin(){
    const dialogRef = this.modalConnection.open(LoginComponent,{
      width: '30%'
    })
  }

  openInscriptionDialog(){
    this.modalConnection.open(InscriptionComponent,{
      width: '70%'
    })
  }
}
