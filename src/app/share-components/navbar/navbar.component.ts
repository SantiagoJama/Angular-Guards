import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionStorageService } from 'src/app/global-services/sesion-storage-service/sesion-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private readonly  sesionStorageService : SesionStorageService,
               private readonly  router : Router
  ) { }

  ngOnInit(): void {
  }

  public logout() : void{
    this.sesionStorageService.deleteUserLoggedSession();
    console.log(this.router.navigate(['/login']))

  }

}
