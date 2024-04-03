import { Component,  Inject,  OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cuota-modal-items',
  templateUrl: './cuota-modal-items.component.html',
  styleUrls: ['./cuota-modal-items.component.scss']
})
export class CuotaModalItemsComponent implements OnInit {


  closemessage='closed using directive';
  inputdata:any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialogRef:MatDialogRef<CuotaModalItemsComponent>
  ) { }

  ngOnInit(): void {
    this.inputdata=this.data;
  }

  closepopup(){
    this.dialogRef.close('Closed using function');
  }

}
