import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Proyecto } from './proyecto';
import { PROYECTOS } from './mock-proyectos';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {
  private proyectos: Proyecto[];

  constructor() {
    this.proyectos = PROYECTOS;
  }

  obtenerProyectos(): Observable<Proyecto[]> {
    return of(this.proyectos);
  }

  agregarProyecto(proyecto: Proyecto): Observable<Proyecto> {
    this.proyectos.push(proyecto);
    return of(proyecto);
  }
}
