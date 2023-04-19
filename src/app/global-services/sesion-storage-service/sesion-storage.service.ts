import { Injectable } from '@angular/core';
import { UserLoggedDTO } from '../dtos/userLoggedData.dto';

@Injectable({
  providedIn: 'root'
})
export class SesionStorageService {

  private readonly USER_LOGGED : string = "USER_NAME";

  constructor() { }

   /**
    * 
    * @param userName 
    */
  public setUserLogged( userName : UserLoggedDTO ): void{
     sessionStorage.setItem(this.USER_LOGGED, userName.name);
  }

  public deleteUserLoggedSession() : void{
      sessionStorage.removeItem(this.USER_LOGGED)
  }

  public isUserLoggedSessionActive() : boolean{
     if(sessionStorage.length){
      return true;
     }
     return false;
  }



  




}
