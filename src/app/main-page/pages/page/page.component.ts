import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserLoggedDTO } from 'src/app/global-services/dtos/userLoggedData.dto';
import { LocalStorageServiceService } from 'src/app/global-services/local-storage-service.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  public userLogged! : string;
  constructor( private readonly route : ActivatedRoute,
               private readonly localStorageService : LocalStorageServiceService) { }

  ngOnInit(): void {
    /// get another value by queryParams
    // this.route.queryParams
    //     .subscribe(( params : Params) =>{
    //       this.userLogged = params['user'];
    //     })
    this.userLogged = this.localStorageService.getUserNameLogged().name;

  }

}
