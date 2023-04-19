export interface loginResponseDTO {
  code : string,
  status : string,
  response : serviceResponse
}

export interface serviceResponse{
    message : string,
    userRol : string,
}

