import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { VehiculoModel } from '../models/vehiculoModel';


@Injectable({
  providedIn: 'root'
})

export class vehiculoService {
    private url = "https://gist.githubusercontent.com/josejbocanegra/17bb8c76405e43655d551a90800c8a81/raw/d41b4acc3457e51e7533fad6d5e9925ee9676457/202212_MISW4104_Grupo1.json";

    constructor(private http: HttpClient) { }

    obtenerVehiculos(): Observable<Array<VehiculoModel>> {
      return this.http.get<Array<VehiculoModel>>(this.url);

    }
}
