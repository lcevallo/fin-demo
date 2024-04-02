import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuotasComponent } from './cuotas/cuotas.component';
import { CuotaComponent } from './cuotas/cuota/cuota.component';

const routes: Routes = [
  {path:'', redirectTo:'cuota', pathMatch:'full'},
  {path:'maestrias-cuotas', component:CuotasComponent},
  {
    path:'cuota', children:[
      { path:'', component:CuotaComponent }, // /cuota
      { path:'edit/:id', component:CuotaComponent }, // /cuota/edit/45478578
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
