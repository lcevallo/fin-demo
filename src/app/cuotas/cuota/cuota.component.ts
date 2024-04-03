import { Component, OnInit } from '@angular/core';
import { Cuota } from 'src/app/shared/cuota.model';
import { CuotaService } from 'src/app/shared/cuota.service';

@Component({
  selector: 'app-cuota',
  templateUrl: './cuota.component.html',
  styleUrls: ['./cuota.component.scss']
})
export class CuotaComponent implements OnInit {

  constructor(public service: CuotaService) { }

  ngOnInit(): void {
  }


  onSubmit(){
    console.log(this.service.cuotaMasterForm.value);
  }


  resetForm(){
    this.service.cuotaMasterForm.reset(new Cuota());
  }

}
