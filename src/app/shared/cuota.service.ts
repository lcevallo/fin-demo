import { Injectable } from '@angular/core';
import { Cuota } from './cuota.model';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CuotaService {

  


  
  constructor(private fb: FormBuilder) { }

  cuotaMasterForm = this.fb.group({
    CuotaId: [null],
    CarreraId: [null],
    nivel: [''],
    fechaInicial: [''],
    fechaFinal: [''],
    estado: [''],
    valor: [''],  
    cuotas: [''],  
  });
}
