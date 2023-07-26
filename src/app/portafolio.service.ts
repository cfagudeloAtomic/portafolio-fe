import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

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

  obtenerProyecto(id: string): Observable<Proyecto | undefined> {
    const proyecto = this.proyectos.find(p => p.id === id);
    return of(proyecto);
  }

  agregarProyecto(proyecto: Proyecto): Observable<Proyecto> {
    proyecto.id = uuidv4();
    this.proyectos.push(proyecto);
    return of(proyecto);
  }
}
