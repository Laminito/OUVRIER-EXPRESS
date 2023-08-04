import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  ngOnInit(): void {
  }

  constructor(private router:Router){

  }

  Inscrire() {
    Swal.fire({
      title:'Good job!',
      text:'You clicked the button!',
      icon:'success',
      showConfirmButton: false,
      timer: 1500
      }

    )
    this.router.navigateByUrl('/admin/dashboard')
  }

  Connecter() {

  }
}
