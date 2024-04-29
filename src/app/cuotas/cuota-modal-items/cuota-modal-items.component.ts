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
  inputdata:any;
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
      concepto: [''],
      productoId: [''],
      fecha_corte: [new Date()],
      indice: [0],
      valor: [0.0],
      delete: [false]
    });
  }



  ngOnInit(): void {
    this.productosMaestriaService.getCmbProductosMaestria().then(res => this.productosMaestria = res as ProductosMaestria[]);
    this.inputdata=this.data;
  }

  closepopup(){
    this.dialogRef.close('Closed using function');
  }
  onSubmit(){
    this.cuotaService.cuotasItems.push(this.cuotasForm.value);
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
