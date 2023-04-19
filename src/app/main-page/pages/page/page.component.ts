import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserLoggedDTO } from 'src/app/global-services/dtos/userLoggedData.dto';
import { LocalStorageServiceService } from 'src/app/global-services/local-storage-service/local-storage.service';
import { SesionStorageService } from 'src/app/global-services/sesion-storage-service/sesion-storage.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  public userLogged! : string;
  constructor( private readonly route : ActivatedRoute,
               private readonly router : Router,
               private readonly localStorageService : LocalStorageServiceService,
               private readonly sesionStorageService : SesionStorageService
               ) {

    if( !this.sesionStorageService.isUserLoggedSessionActive() ) this.router.navigate(['/login']); 
  }

  ngOnInit(): void {
    /// get another value by queryParams
    // this.route.queryParams
    //     .subscribe(( params : Params) =>{
    //       this.userLogged = params['user'];
    //     })
    
    this.userLogged = this.localStorageService.getUserNameLogged().name;

  }

  

}
