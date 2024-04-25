import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ROUTES } from '@data/constants/routes/api.routes';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosMaestriaService {

  constructor(private http:HttpClient) { }


  public getCmbProductosMaestria(){
    return this.http.get(API_ROUTES.CATALOGO.PRODUCTOS.CMB_MAESTRIA).toPromise();
  }



  errorHandler(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
