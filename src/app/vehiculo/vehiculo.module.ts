import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoComponent } from './vehiculo.component';
import { ListarVehiculoComponent } from './listar-vehiculo/listar-vehiculo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ListarVehiculoComponent],
  declarations: [VehiculoComponent, ListarVehiculoComponent]
})
export class VehiculoModule { }
