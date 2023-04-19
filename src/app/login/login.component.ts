import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './services/login.service';
import { loginBodyRequestDTO } from './dtos/loginBodyRequest.dto';
import { loginResponseDTO } from './dtos/loginResponse.dto';
import {  Router } from '@angular/router';
import { LocalStorageServiceService } from '../global-services/local-storage-service/local-storage.service';
import { UserLoggedDTO } from '../global-services/dtos/userLoggedData.dto';
import { SesionStorageService } from '../global-services/sesion-storage-service/sesion-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   public areCredentialsIncorrect : boolean = false;
   public internalOrServiceProblems : boolean = false;
   public loginResponse! : string;

  constructor( private readonly loginService : LoginService, 
               private readonly router : Router,
               private readonly localStorageService : LocalStorageServiceService,
               private readonly sesionStorageService : SesionStorageService,
               ) { }

  ngOnInit(): void {
  }

  /**
   * Este método realiza el login hacía la página principal o home
   * @param loginForm : NgForm -> Contiene la credenciales ingresadas por el usuario
   */
  login( loginForm : NgForm ) : void {
    const loginBodyRequest : loginBodyRequestDTO = {
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
                  const userLogged : UserLoggedDTO = {
                        name : loginForm.value.userName,
                        userRol : successfullMsg.response.userRol
                  }
                  this.localStorageService.setUserNameLogged( userLogged );
                  this.sesionStorageService.setUserLogged( userLogged );
                  //for practice purpose
                  this.router.navigate(["/main-page"],{queryParams: { userRol:  successfullMsg.response.userRol } })
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
