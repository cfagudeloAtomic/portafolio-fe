import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { PortafolioService } from '../portafolio.service';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-formulario-proyecto',
  templateUrl: './formulario-proyecto.component.html',
  styleUrls: ['./formulario-proyecto.component.css']
})
export class FormularioProyectoComponent {
  proyectoForm: FormGroup;

  constructor(private portafolioService: PortafolioService, private calendar: NgbCalendar) {
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
      return;
    }
    this.portafolioService.agregarProyecto(this.proyectoForm.value);
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