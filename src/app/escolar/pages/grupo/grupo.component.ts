import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {
  //encabezado de las tablas
  encabezadoColumnas=['No','Grupo',''];
  constructor() { }

  ngOnInit(): void {
  }

}
