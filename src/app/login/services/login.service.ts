import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { loginResponseDTO } from '../dtos/loginResponse.dto';
import { loginBodyRequestDTO } from '../dtos/loginBodyRequest.dto';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private testUserName = "sant";
  private testUserPassword = "9090";

  private successfulResponse : loginResponseDTO ={
    code : "200",
    status : "OK",
    response : {
      message : "Credenciales correctas"
    }
  };

  private failedResponse : loginResponseDTO ={
    code : "-2",
    status : "Not OK",
    response : {
      message : "Credenciales incorrectas"
    }
  };

  constructor( private readonly http : HttpClient) { }



  loginAccess( bodyRequest : loginBodyRequestDTO ) : Observable<loginResponseDTO>{

    let {userName, userPassword} = bodyRequest;
    if( userName == this.testUserName && userPassword == this.testUserPassword){
      return of(
        this.successfulResponse
      )
    }else{
      return of (
        this.failedResponse
      )
    }


  }


}
