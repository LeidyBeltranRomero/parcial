export class VehiculoModel {
  id: number=0;
  marca!: string ;
  linea: string | undefined;
  referencia:string | undefined;
  modelo: number | undefined;
  kilometraje: number | undefined;
  imagen: string| undefined;

  public constructor(marca: string, linea: string, referencia: string, modelo: number, kilometraje: number){
    this.marca = marca;
    this.linea = linea;
    this.referencia = referencia;
    this.modelo = modelo;
    this.kilometraje = kilometraje;
  }
}
