import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageComponent } from './main-page/pages/page/page.component';
import { ParamsPageComponent } from './params-page/pages/params-page.component';


const routes: Routes = [
  {path : "login", component : LoginComponent},
  {path : "main-page", component : PageComponent },
  {path : "param-page/:id", component : ParamsPageComponent  },
  {path : "", component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
