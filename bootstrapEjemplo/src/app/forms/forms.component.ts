import { Component, OnInit } from '@angular/core';

class Alumno{
  nombre: string;
  apellido: string;

  constructor()
  {
    this.nombre = '';
    this.apellido = '';
  }
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent implements OnInit {

  alumno: Alumno = new Alumno();
  listadoAlumnos: Array<Alumno> = new Array<Alumno>();

  constructor() { }

  ngOnInit(): void {
  }

  agregar(){
    this.listadoAlumnos.push({
      nombre: this.alumno.nombre,
      apellido: this.alumno.apellido
    })
    this.alumno.nombre = '';
    this.alumno.apellido= '';
    
  }


}
