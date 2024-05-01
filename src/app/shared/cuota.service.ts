import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CuotaItem } from './cuota-item.model';
import {API_ROUTES} from "@data/constants/routes/api.routes";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CuotaService {


  cuotas_items:CuotaItem[]=[];


  constructor(private fb: FormBuilder,private http:HttpClient) { }

  cuotaMasterForm = this.fb.group({
    cuota_id: [''],
    carrera_id: [''],
    nivel: [''],
    fecha_inicial: [''],
    fecha_final: [''],
    estado: [false],
    valor: [0.0],
    cuotas: [0],
  });

  saveOrUpdateOrder() {
    var body = {
      ...this.cuotaMasterForm.value,
      cuotas_items: this.cuotas_items
    };
    console.log(body)
    return this.http.post(API_ROUTES.CATALOGO.MAESTRIA_CUOTAS.SAVEORUPDATE , body);
  }
}
