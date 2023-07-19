import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Proyecto } from './proyecto';
import { PROYECTOS } from './mock-proyectos';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {
  constructor() { }

  obtenerProyectos(): Observable<Proyecto[]> {
    return of(PROYECTOS);
  }
}
