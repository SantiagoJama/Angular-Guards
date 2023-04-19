import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardMenuComponent } from './components/card-menu/card-menu.component';
import { PageComponent } from './pages/page/page.component';
import { NavbarComponent } from '../share-components/navbar/navbar.component';



@NgModule({
  declarations: [
    CardMenuComponent,
    PageComponent,
    NavbarComponent
  ],
  exports : [
    PageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainPageModule { }
