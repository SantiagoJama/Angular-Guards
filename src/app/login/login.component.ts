import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './services/login.service';
import { loginBodyRequestDTO } from './dtos/loginBodyRequest.dto';
import { loginResponseDTO } from './dtos/loginResponse.dto';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   public areCredentialsIncorrect : boolean = false;
   public internalOrServiceProblems : boolean = false;
   public loginResponse! : string;

  constructor( private readonly loginService : LoginService, private readonly router : Router) { }

  ngOnInit(): void {
  }

  /**
   *
   * @param loginForm
   */
  login( loginForm : NgForm ) : void {
    //newDeviceForm.value.formBrandDevice
    console.log( loginForm.value.userName);
    console.log( loginForm.value.userPassword);

    let loginBodyRequest : loginBodyRequestDTO = {
       userName : loginForm.value.userName,
       userPassword : loginForm.value.userPassword
    }

    this.loginService.loginAccess( loginBodyRequest )
        .subscribe({
          next : ( successfullMsg : loginResponseDTO) =>{
                console.log( successfullMsg );
                if( successfullMsg.code !== "200"){
                  this.areCredentialsIncorrect = true;
                  this.loginResponse = successfullMsg.response.message;
                }else{
                  this.areCredentialsIncorrect = false;
                  this.router.navigate(["/main-page"],{queryParams: { user: 'Santiago' } })
                }
          },
          error : ( e : loginBodyRequestDTO )=>{
              console.log( e )
              this.internalOrServiceProblems = true;
          },
          complete: ()=>{
            console.log("Fin de la comunicación con el servicio");
          }
        })

  }

}
