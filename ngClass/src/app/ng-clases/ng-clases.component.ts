import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-clases',
  templateUrl: './ng-clases.component.html',
  styleUrls: ['./ng-clases.component.css']
})
export class NgClasesComponent implements OnInit {

  mostrarArial: Boolean = true

  mostrarTimes: Boolean = true

  mostrarSans: Boolean = true

  opcionUno:Boolean = false


  constructor() { }

  ngOnInit(): void {
  }

  alternarUno(){
    this.opcionUno = !this.opcionUno;
  }
}
