import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaColaboradoresComponent } from './lista-colaboradores/lista-colaboradores.component';
import { FormularioColaboradorComponent } from './formulario-colaborador/formulario-colaborador.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaColaboradoresComponent,
    FormularioColaboradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
