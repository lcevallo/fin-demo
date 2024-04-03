import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Cuota } from 'src/app/shared/cuota.model';
import { CuotaService } from 'src/app/shared/cuota.service';
import { CuotaModalItemsComponent } from '../cuota-modal-items/cuota-modal-items.component';

@Component({
  selector: 'app-cuota',
  templateUrl: './cuota.component.html',
  styleUrls: ['./cuota.component.scss']
})
export class CuotaComponent implements OnInit {

  constructor(public service: CuotaService,
    private dialog:MatDialog) { }

  ngOnInit(): void {
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

}
