import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { Proyecto } from './proyecto';
import { environment } from './../environments/environment';
import { AlertasService } from './alertas.service';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {
  private baseURL = environment.API_URL;

  private options = {
    headers: {
      "X-Sec-4-Email": environment.EMAIL,
      "Content-Type": "application/json"
    },
  }

  constructor(private http: HttpClient, private alertasService: AlertasService) {
  }

  obtenerProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(`${this.baseURL}/portafolios`, this.options);
  }

  obtenerProyecto(id: string): Observable<Proyecto> {
    return this.http.get<Proyecto>(`${this.baseURL}/portafolios/${id}`, this.options);
  }

  agregarProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(`${this.baseURL}/portafolios`, proyecto, this.options).pipe(
      tap(_ => this.alertasService.agregarAlerta({
        msg: "El proyecto fue creado exitosamente",
        tipo: "success"
      })),
    );
  }
}
