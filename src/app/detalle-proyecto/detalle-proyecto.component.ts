import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Proyecto } from '../proyecto';
import { PortafolioService } from '../portafolio.service';

@Component({
  selector: 'app-detalle-proyecto',
  templateUrl: './detalle-proyecto.component.html',
  styleUrls: ['./detalle-proyecto.component.css']
})
export class DetalleProyectoComponent implements OnInit {
  proyecto?: Proyecto;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private portafolioService: PortafolioService,
  ) { }

  ngOnInit(): void {
    this.obtenerProyecto();
  }

  private obtenerProyecto() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      throw new Error("ruta invalida");
    }
    this.portafolioService.obtenerProyecto(id).subscribe((p: Proyecto | undefined) => {
      if (!p) {
        this.router.navigate(['not-found']);
      }
      this.proyecto = p;
    });
  }
}
