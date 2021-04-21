import { Component, OnInit } from '@angular/core';

interface Producto{
  nombre: string;
  stock: number;
  fabricante: string;
  fechaVence: Date;
}

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {
  nombres:Array<string> = ["Maria", "Ana", "Juan", "Pedro"]

  productos: Array<Producto> = [
    {
      nombre : 'Arroz',
      stock : 15,
      fabricante : 'Distribuidor Industrial',
      fechaVence : new Date('04/05/2021')
    },
    {
      nombre : 'Fideos',
      stock : 10,
      fabricante : 'Distribuidor Cooperativo',
      fechaVence : new Date('12/03/2021')
    },
    {
      nombre : 'Gaseosa',
      stock : 35,
      fabricante : 'Distribuidor PepsiCo',
      fechaVence : new Date('11/11/2025')
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
