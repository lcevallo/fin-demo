import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ROUTES } from '@data/constants/routes/api.routes';

@Injectable({
  providedIn: 'root'
})
export class NivelService {

  constructor(private http:HttpClient) { }

  public getCmbNiveles(){
    return this.http.get(API_ROUTES.ACADEMICO.NIVELES_ACADEMICOS.CMB).toPromise();
  }
}
