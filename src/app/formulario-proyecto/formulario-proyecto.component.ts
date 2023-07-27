import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbCalendar, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { PortafolioService } from '../portafolio.service';
import { Proyecto } from '../proyecto';
import { AlertasService } from '../alertas.service';

@Component({
  selector: 'app-formulario-proyecto',
  templateUrl: './formulario-proyecto.component.html',
  styleUrls: ['./formulario-proyecto.component.css']
})
export class FormularioProyectoComponent {
  proyectoForm: FormGroup;

  constructor(
    private router: Router,
    private portafolioService: PortafolioService,
    private alertasService: AlertasService,
  ) {
    this.proyectoForm = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      descripcion: new FormControl('', Validators.required),
      fechaCreacion: new FormControl(undefined, Validators.required),
      url: new FormControl(''),
      imagenes: new FormArray([]),
    })
  }

  guardarProyecto(evento: Event) {
    evento.preventDefault();
    if (this.proyectoForm.invalid) {
      console.log(this.proyectoForm);
      this.alertasService.agregarAlerta({
        msg: "El proyecto no se puede guardar porque tiene información inválida",
        tipo: "danger",
      })
      return;
    }
    const dateStruct: NgbDateStruct = this.proyectoForm.get('fechaCreacion')?.value;
    const date: Date = new Date(dateStruct.year, dateStruct.month - 1, dateStruct.day);
    const proyecto: Proyecto = this.proyectoForm.value;
    proyecto.fechaCreacion = date;
    this.portafolioService.
      agregarProyecto(proyecto).
      subscribe(p => this.router.navigate(['proyectos']));
  }

  get imagenes(): FormArray {
    return this.proyectoForm.get('imagenes') as FormArray;
  }

  anadirImagen() {
    this.imagenes.push(new FormControl('', Validators.required));
  }

  removerImagen() {
    this.imagenes.removeAt(this.imagenes.length - 1);
  }
}
