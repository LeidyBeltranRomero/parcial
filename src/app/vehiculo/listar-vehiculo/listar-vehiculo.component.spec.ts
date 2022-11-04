/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { ListarVehiculoComponent } from './listar-vehiculo.component';
import { HttpClientModule } from '@angular/common/http';
import { VehiculoModel } from '../models/vehiculoModel';

describe('ListarVehiculoComponent', () => {
  let component: ListarVehiculoComponent;
  let fixture: ComponentFixture<ListarVehiculoComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ListarVehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVehiculoComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 10; i++) {
      const vehiculo = new VehiculoModel(
        faker.name.firstName(),
        faker.name.firstName(),
        faker.name.firstName(),
        parseInt(faker.random.numeric()),
        parseInt(faker.random.numeric())

      );
      component.vehiculos.push(vehiculo);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
