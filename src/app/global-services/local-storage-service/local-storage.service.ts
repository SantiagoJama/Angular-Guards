import { Injectable } from '@angular/core';
import { UserLoggedDTO } from '../dtos/userLoggedData.dto';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageServiceService {
  private readonly NAME_AND_ROL_OF_USER_LOGGED : string = "NAME_AND_ROL_OF_USER_LOGGED";

  constructor() { }

  /**
   * Este servicio guarda los datos relacionados al usuario que realiza el ingreso al sistema
   * @param userLogged : UserLoggedDTO -> Objeto que contiene los datos del usuario, devueltos por el service ( Login )
   */
  public setUserNameLogged( userLogged : UserLoggedDTO ) : void{
      localStorage.setItem(this.NAME_AND_ROL_OF_USER_LOGGED, JSON.stringify(userLogged));
  }

  /**
   * Este servicio permite obtener los datos del usuario que ingresó al sistema
   * @returns Object : UserLoggedDTO -> Datos relaciondos al usuario 
   */
  public getUserNameLogged() : UserLoggedDTO{
    const userLoogedData : any = localStorage.getItem(this.NAME_AND_ROL_OF_USER_LOGGED);
    return <UserLoggedDTO> JSON.parse(userLoogedData );
  }
  

}
