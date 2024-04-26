import { Component,  Inject,  OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductosMaestria } from 'src/app/shared/productos-maestria.model';
import { ProductosMaestriaService } from 'src/app/shared/productos-maestria.service';


@Component({
  selector: 'app-cuota-modal-items',
  templateUrl: './cuota-modal-items.component.html',
  styleUrls: ['./cuota-modal-items.component.scss']
})
export class CuotaModalItemsComponent implements OnInit {

  closemessage='closed using directive';
  inputdata:any;
  productosMaestria:ProductosMaestria[]=[];

  cuotasForm = this.fb.group({
    id: [null],
    concepto: [''],
    fecha_corte: [''],
    valor: [0.0]
  });


  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private fb: FormBuilder,
    private productosMaestriaService: ProductosMaestriaService,
    public dialogRef:MatDialogRef<CuotaModalItemsComponent>
  ) { }



  ngOnInit(): void {
    this.productosMaestriaService.getCmbProductosMaestria().then(res => this.productosMaestria = res as ProductosMaestria[]);
    this.inputdata=this.data;
  }

  closepopup(){
    this.dialogRef.close('Closed using function');
  }
  onSubmit(){
      console.log(this.cuotasForm.value);
  }

}
