import { Component, OnInit } from '@angular/core';
import { CuotaService } from 'src/app/shared/cuota.service';

@Component({
  selector: 'app-cuota',
  templateUrl: './cuota.component.html',
  styleUrls: ['./cuota.component.scss']
})
export class CuotaComponent implements OnInit {

  constructor(private service: CuotaService) { }

  ngOnInit(): void {
  }

}
