import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-params-page',
  templateUrl: './params-page.component.html',
  styleUrls: ['./params-page.component.css']
})
export class ParamsPageComponent implements OnInit {

  public urlParam! : string;
  constructor( private readonly route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
              .subscribe(( params : Params)=>{
                this.urlParam = params['id']
              })
  }

}
