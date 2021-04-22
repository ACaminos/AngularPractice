import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})

export class NgSwitchComponent implements OnInit {

  pestana:string= ''

  constructor() { }

  ngOnInit(): void {
  }

  cambiarPestana(pestana:string){
    this.pestana = pestana;

  }
}