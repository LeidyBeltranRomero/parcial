import { Component, OnInit } from '@angular/core';
import { VehiculoModel } from '../models/vehiculoModel';
import { vehiculoService } from '../service/vehiculoService';


@Component({
  selector: 'app-listar-vehiculo',
  templateUrl: './listar-vehiculo.component.html',
  styleUrls: ['./listar-vehiculo.component.css']
})
export class ListarVehiculoComponent implements OnInit {


   public vehiculos: Array<VehiculoModel> = [];
   public marcas = new Map<string, any>();

  constructor(private serviceVehiculo: vehiculoService) { }

  ngOnInit() {
    this.obtenerVehiculos();
  }

  private obtenerVehiculos(){
    this.serviceVehiculo.obtenerVehiculos().subscribe((respuesta) => {
      this.vehiculos = respuesta;
      this.getVehiculosByMarca(this.vehiculos);
      console.log(this.vehiculos)
    })
  }

  getVehiculosByMarca(vehiculos: Array<VehiculoModel>): void {
    for (let i = 0; i < vehiculos.length; i++) {
      if (this.marcas.get(vehiculos[i].marca) == undefined) {
        this.marcas.set(vehiculos[i].marca, 1);
      }
      else {
        //console.log("Entró a else")
        var cantidad: number = 0;
        cantidad = parseInt(this.marcas.get(vehiculos[i].marca))
        //console.log("cantidad" + cantidad)
        cantidad = cantidad + 1;
        this.marcas.set(vehiculos[i].marca, cantidad);

      }
    }

    console.log("Tipos Map");
    for (let entry of this.marcas.entries()) {
      console.log(entry[0], entry[1]);
    }
    console.log("--------");

  }

}

