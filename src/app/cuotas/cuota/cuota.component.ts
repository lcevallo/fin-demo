import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Carrera } from 'src/app/shared/carrera.model';
import { CarreraService } from 'src/app/shared/carrera.service';
import { CuotaItem } from 'src/app/shared/cuota-item.model';
import { Cuota } from 'src/app/shared/cuota.model';
import { CuotaService } from 'src/app/shared/cuota.service';
import { Nivel } from 'src/app/shared/nivel.model';
import { NivelService } from 'src/app/shared/nivel.service';
import { CuotaModalItemsComponent } from '../cuota-modal-items/cuota-modal-items.component';

@Component({
  selector: 'app-cuota',
  templateUrl: './cuota.component.html',
  styleUrls: ['./cuota.component.scss']
})
export class CuotaComponent implements OnInit {

  carreraCmb:Carrera[]=[];
  nivelCmb:Nivel[]=[];

  constructor(public service: CuotaService,
    private carreraService:CarreraService,
    private nivelService:NivelService,
    private dialog:MatDialog) { }

  ngOnInit(): void {
    this.carreraService.getCmbCarreras().then(res => {
      const carreras = res as Carrera[];
      this.carreraCmb = carreras.filter(carrera => carrera.niveled === 4);
    });


    this.nivelService.getCmbNiveles().then(res => {
      const niveles = res as Nivel[];
      this.nivelCmb = niveles.filter(niveles => niveles.maestria === true);
    });
   

    this.resetForm();
  }


  onSubmit(){
    console.log(this.service.cuotaMasterForm.value);
  }


  resetForm(){
    this.service.cuotaMasterForm.reset(new Cuota());
    this.service.cuotasItems=[];
  }

  AddOrEditCuotaItem(cuotaItemIndex:number|null, cuotaId:string){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.disableClose=true;
    dialogConfig.width="50%";
    dialogConfig.data= {cuotaItemIndex,cuotaId};

    this.dialog.open(CuotaModalItemsComponent,dialogConfig);

  }


  validarValores(valorTotal: any, numeroCuotas: any): boolean {
    // Primero, validar que los valores no sean null
    if (valorTotal == null || numeroCuotas == null) {
      console.error('Los valores de total o cuotas no pueden ser nulos.');
      return false;
    }
  
    // Convertir los valores a números si son cadenas que representan números
    const valorTotalNumerico = Number(valorTotal);
    const numeroCuotasNumerico = Number(numeroCuotas);
  
    // Verificar si los valores son NaN, lo que indica que no eran números válidos
    if (isNaN(valorTotalNumerico) || isNaN(numeroCuotasNumerico)) {
      console.error('Los valores ingresados deben ser números.');
      return false;
    }
  
    return true;
  }
  

  
  generarCuotas() {
    // Obtener el valor total y el número de cuotas desde el formulario
    const valorTotalInput = this.service.cuotaMasterForm.get('valor')?.value;
    const numeroCuotasInput = this.service.cuotaMasterForm.get('cuotas')?.value;
  
    // Validar que los valores sean correctos utilizando la función actualizada
    if (!this.validarValores(valorTotalInput, numeroCuotasInput)) {
      return; // Salir de la función si la validación falla
    }
  
    // Asegurar que los valores son de tipo number para TypeScript
    const valorTotal = Number(valorTotalInput);
    const numeroCuotas = Number(numeroCuotasInput);

    // Calcular el valor de cada cuota
    const valorCuota = parseFloat((valorTotal / numeroCuotas).toFixed(2));

    
    // Inicializar el array de cuotas y la suma acumulada de las cuotas
    this.service.cuotasItems = []; // Indicar que cuotasArray contendrá elementos de tipo Item
    let sumaCuotas = 0;
    let fechaActual = new Date(); // Fecha de inicio para la primera cuota

    // Generar las cuotas (excepto la última)
    for (let indice = 1; indice < numeroCuotas; indice++) {
      const item = new CuotaItem(); // Crear una nueva instancia de Item
      item.indice = indice;
      item.valor = valorCuota;
      item.fecha_corte = new Date(fechaActual); // Asignar la fecha actual a la cuota
      this.service.cuotasItems.push(item);

      sumaCuotas += valorCuota;
      fechaActual.setMonth(fechaActual.getMonth() + 1); // Incrementar la fecha en un mes
    }

    // Calcular y agregar la última cuota
    const valorUltimaCuota = parseFloat((valorTotal - sumaCuotas).toFixed(2));
    const itemUltimaCuota = new CuotaItem();
    itemUltimaCuota.indice = numeroCuotas;
    itemUltimaCuota.valor = valorUltimaCuota;
    itemUltimaCuota.fecha_corte = new Date(fechaActual);
    this.service.cuotasItems.push(itemUltimaCuota);

    // Aquí tienes tu array de cuotas generado
    console.log(this.service.cuotasItems);
    

  }
  


  }

