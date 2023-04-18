import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardMenuComponent } from './components/card-menu/card-menu.component';
import { PageComponent } from './pages/page/page.component';



@NgModule({
  declarations: [
    CardMenuComponent,
    PageComponent
  ],
  exports : [
    PageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainPageModule { }
