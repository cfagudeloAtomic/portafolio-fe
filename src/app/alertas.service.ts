import { Injectable } from '@angular/core';

export interface Alerta {
  msg: string,
  tipo: 'success' | 'info' | 'danger'
}

@Injectable({
  providedIn: 'root'
})
export class AlertasService {
  private alertas: Alerta[] = [];

  constructor() { }

  agregarAlerta(alerta: Alerta): void {
    this.alertas.push(alerta);
  }

  obtenerAlertas(): Alerta[] {
    return this.alertas;
  }

  removerAlerta(i: number): void {
    this.alertas.splice(i, 1);
  }
}
