import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbCollapseModule, NgbModule, NgbDatepickerModule, NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProyectosComponent } from './lista-proyectos/lista-proyectos.component';
import { FormularioProyectoComponent } from './formulario-proyecto/formulario-proyecto.component';
import { DetalleProyectoComponent } from './detalle-proyecto/detalle-proyecto.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AlertasComponent } from './alertas/alertas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProyectosComponent,
    FormularioProyectoComponent,
    DetalleProyectoComponent,
    NotFoundComponent,
    AlertasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbCarouselModule,
    NgbAlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
