import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuotasComponent } from './cuotas/cuotas.component';
import { CuotaComponent } from './cuotas/cuota/cuota.component';
import { CuotaModalItemsComponent } from './cuotas/cuota-modal-items/cuota-modal-items.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CuotasComponent,
    CuotaComponent,
    CuotaModalItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
