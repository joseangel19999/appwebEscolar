import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

interface materiasData {
  id:number,
  materia: string;
  nombreGrado:string,
}
@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {
 //cabezera de la tabla
 cabezeraTblMaterias: string[] = ['posicion', 'nombre', 'grado', 'acciones'];
 @ViewChild(MatPaginator) paginador:MatPaginator;
 public dstaSource= new MatTableDataSource;
 page_size:number=3;
 page_number:number=1;
 pageSizeOptions=[3,5,10];

 listaMaterias:materiasData[]=[
   {id:1,materia:'Ingles',nombreGrado:'6 semestre'},
   {id:2,materia:'Literatura',nombreGrado:'6 semestre'},
   {id:3,materia:'Biologia',nombreGrado:'6 semestre'},
   {id:4,materia:'Leyeres y nomarmas 2',nombreGrado:'6 semestre'}
  ]
  constructor() { }

  ngOnInit(): void {
    this.dstaSource.data=this.listaMaterias;
  }

}
