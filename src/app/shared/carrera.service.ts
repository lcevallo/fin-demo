import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ROUTES } from '@data/constants/routes/api.routes';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  constructor(private http:HttpClient) { }

  public getCmbCarreras(){
    return this.http.get(API_ROUTES.CATALOGO.UNIDAD_ACADEMICA.CMB_CARRERAS).toPromise();
  }



  errorHandler(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
