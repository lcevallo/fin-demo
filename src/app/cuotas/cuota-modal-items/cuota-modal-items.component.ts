import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CuotaService } from '@shared/cuota.service';
import { ProductosMaestria } from '@shared/productos-maestria.model';
import { ProductosMaestriaService } from '@shared/productos-maestria.service';


@Component({
  selector: 'app-cuota-modal-items',
  templateUrl: './cuota-modal-items.component.html',
  styleUrls: ['./cuota-modal-items.component.scss']
})
export class CuotaModalItemsComponent implements OnInit {

  closemessage='closed using directive';
  productosMaestria:ProductosMaestria[]=[];

  cuotasForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private fb: FormBuilder,
    private productosMaestriaService: ProductosMaestriaService,
    public cuotaService:CuotaService,
    public dialogRef:MatDialogRef<CuotaModalItemsComponent>
  ) {

    this.cuotasForm = this.fb.group({
      cuotaId: [null],
      cuotaItemId: [null],
      concepto: ['Matrícula Extranjera'],
      productoId: ['dd5fcd3e-cabe-4dfd-8d0f-15bf688b8994'],
      fecha_corte: [new Date(new Date().getTime()).toISOString().slice(0, 10)],
      indice: [this.cuotaService.cuotasItems.length + 1],
      valor: [0.0],
      delete: [false]
    });
  }



  ngOnInit(): void {
    this.productosMaestriaService.getCmbProductosMaestria().then(res => this.productosMaestria = res as ProductosMaestria[]);

    if (this.data.cuotaItemIndex == null)

      this.cuotasForm = this.fb.group({
        cuotaId: [null],
        cuotaItemId: [null],
        concepto: ['Matrícula Extranjera'],
        productoId: ['dd5fcd3e-cabe-4dfd-8d0f-15bf688b8994'],
        fecha_corte: [new Date(new Date().getTime()).toISOString().slice(0, 10)],
        indice: [this.cuotaService.cuotasItems.length+1],
        valor: [0.0],
        delete: [false]
      });
    else
      {

        let cuotaItem = Object.assign({}, this.cuotaService.cuotasItems[this.data.cuotaItemIndex]);
        let cuotaItemP:any = this.cuotaService.cuotasItems[this.data.cuotaItemIndex]

        cuotaItemP.fecha_corte = (new Date(cuotaItem.fecha_corte)).toISOString().slice(0, 10);

        const producto = this.productosMaestria.find(p => p.id === cuotaItem.productoId);
        if (producto) {
          cuotaItem.productoId = producto.nombre;
        }
        console.log(cuotaItem);
        // this.cuotasForm.setValue(cuotaItem);
        this.cuotasForm.setValue(cuotaItemP);

      }

  }

  closepopup(){
    this.dialogRef.close('Closed using function');
  }

 onSubmit(){

    if (this.data.cuotaItemIndex == null)
      this.cuotaService.cuotasItems.push(this.cuotasForm.value);
    else
      this.cuotaService.cuotasItems[this.data.cuotaItemIndex] = this.cuotasForm.value;

    this.dialogRef.close();
  }

  actualizarFormulario(event: Event | null) {
    if (event) {
      const ctrl = event.target as HTMLSelectElement;
      if (ctrl) {

        if (ctrl.selectedIndex === 0) {
          this.cuotasForm.get('concepto')?.setValue('');
        } else {
          const selectedOption = this.productosMaestria[ctrl.selectedIndex - 1]
          this.cuotasForm.get('concepto')?.setValue(selectedOption['nombre']);
        }
      }
    }
  }

}
