import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.css']
})
export class CardMenuComponent implements OnInit {

  @Input()
  public cardTitle! : string;
  @Input()
  public src! : string;
  @Input()
  public cardText! : string;
  @Input()
  public cardButtonName! : string;



  constructor() { }

  ngOnInit(): void {

  }

}
