import { Component, OnInit } from '@angular/core';

import { Alerta, AlertasService } from '../alertas.service';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {
  alertas: Alerta[] = [];

  constructor(private alertasService: AlertasService) { }

  ngOnInit(): void {
    this.alertas = this.alertasService.obtenerAlertas();
  }

  removerAlerta(i: number): void {
    this.alertasService.removerAlerta(i);
  }
}
