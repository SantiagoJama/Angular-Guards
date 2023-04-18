import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  public userLogged! : string;
  constructor( private readonly route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
        .subscribe(( params : Params) =>{
          this.userLogged = params['user'];
        })
  }

}
