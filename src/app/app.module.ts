import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbCollapseModule, NgbModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProyectosComponent } from './lista-proyectos/lista-proyectos.component';
import { FormularioProyectoComponent } from './formulario-proyecto/formulario-proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProyectosComponent,
    FormularioProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
