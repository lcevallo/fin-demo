import { Injectable } from '@angular/core';
import { Cuota } from './cuota.model';
import { FormBuilder } from '@angular/forms';
import { CuotaItem } from './cuota-item.model';

@Injectable({
  providedIn: 'root'
})
export class CuotaService {

  
  cuotasItems:CuotaItem[]=[];

  
  constructor(private fb: FormBuilder) { }

  cuotaMasterForm = this.fb.group({
    CuotaId: [''],
    CarreraId: [''],
    nivel: [''],
    fechaInicial: [new Date()],
    fechaFinal: [new Date()],
    estado: [''],
    valor: [0],  
    cuotas: [0.0],  
  });
}
