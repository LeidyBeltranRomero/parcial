import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { VehiculoModule } from './vehiculo/vehiculo.module';


@NgModule({
  declarations: [
    AppComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    VehiculoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
