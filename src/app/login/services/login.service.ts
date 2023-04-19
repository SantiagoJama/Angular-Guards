import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { loginResponseDTO } from '../dtos/loginResponse.dto';
import { loginBodyRequestDTO } from '../dtos/loginBodyRequest.dto';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly testUserName : string = "sant";
  private readonly testUserPassword : string = "9090";
  private readonly secondUserName : string = "jama";
  private readonly secondUserPassword : string = "1010"
  private readonly adminUserName : string = "Santiago";
  private readonly adminUserPassword : string = "Santi";

  
  //===================== MOCK ==================================
  private successfulResponseForTestUser : loginResponseDTO ={
    code : "200",
    status : "OK",
    response : {
      message : "Credenciales correctas",
      userRol : "TestUser"
    }
  };
  private successfulResponseForSecondUser : loginResponseDTO ={
    code : "200",
    status : "OK",
    response : {
      message : "Credenciales correctas",
      userRol : "SecondUser"
    }
  };
  private successfulResponseForAdminUser : loginResponseDTO ={
    code : "200",
    status : "OK",
    response : {
      message : "Credenciales correctas",
      userRol : "AdminUser"
    }
  };

  private failedResponse : loginResponseDTO ={
    code : "-2",
    status : "Not OK",
    response : {
      message : "Credenciales incorrectas",
      userRol : "Not user Rol"
    }
  };
  //============================ FIN MOCK=======================

  constructor( private readonly http : HttpClient) { }


  /**
   * Este servicio raliza la petición para consultar que las credenciales ingresadas por el usuario sean validas
   * @param bodyRequest : loginBodyRequestDTO -> Objeto con las credenciales envíadas por el usuario
   * @returns 
   */
  loginAccess( bodyRequest : loginBodyRequestDTO ) : Observable<loginResponseDTO>{

    let {userName, userPassword} = bodyRequest;
    if( userName == this.testUserName && userPassword == this.testUserPassword ){
      return of(
        this.successfulResponseForTestUser
      )
    }else if( userName == this.secondUserName && userPassword == this.secondUserPassword){
      return of(
        this.successfulResponseForSecondUser
      )
    } else if( userName == this.adminUserName && userPassword == this.adminUserPassword){
      return of(
        this.successfulResponseForAdminUser 
      )
    }
    else{
      return of (
        this.failedResponse
      )
    }
  }


}
