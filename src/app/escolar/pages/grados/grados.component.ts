import { Component, OnInit } from '@angular/core';

export interface UserData {
  nombre: string;
  descripcion: string;
}

@Component({
  selector: 'app-grados',
  templateUrl: './grados.component.html',
  styleUrls: ['./grados.component.css']
})
export class GradosComponent implements OnInit {
 //cabezera de la tabla
 displayedColumns: string[] = ['posicion', 'nombre', 'correo', 'acciones'];

  encabezadoGrados:string[]=['No','Nombre','Acciones'];
  constructor() { }

  ngOnInit(): void {
  }

}
