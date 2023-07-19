import { Component, OnInit } from '@angular/core';

import { Proyecto } from '../proyecto';
import { PROYECTOS } from '../mock-proyectos';
import { PortafolioService } from '../portafolio.service';

@Component({
  selector: 'app-lista-proyectos',
  templateUrl: './lista-proyectos.component.html',
  styleUrls: ['./lista-proyectos.component.css']
})
export class ListaProyectosComponent implements OnInit {
  proyectos: Proyecto[];

  constructor(private portafolioService: PortafolioService) {
    this.proyectos = [];
  }

  ngOnInit(): void {
    this.obtenerProyectos();
  }

  private obtenerProyectos() {
    this.portafolioService.obtenerProyectos().subscribe(ps => this.proyectos = ps);
  }
}
