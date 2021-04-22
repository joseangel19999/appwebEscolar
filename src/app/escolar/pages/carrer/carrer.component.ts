import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MenuRegistrarComponent } from '../../components/menu-registrar/menu-registrar.component';

interface gradodoData {
  id:number,
  carrera: string;
}
@Component({
  selector: 'app-carrer',
  templateUrl: './carrer.component.html',
  styleUrls: ['./carrer.component.css']
})
export class CarrerComponent implements OnInit {
 //cabezera de la tabla
 displayedColumns: string[] = ['posicion', 'carrera', 'acciones'];
 textBtnRegisModifi:string="Registrar";
 selectedRow;
 @ViewChild(MatPaginator) paginador:MatPaginator;
 public dataSource = new MatTableDataSource;

  //mandar evento a componente hijo
  @ViewChild(MenuRegistrarComponent) menuComponent: MenuRegistrarComponent;

  listaCarreras:gradodoData[]=[
    {id:1,carrera:'Lic en Derecho'},
    {id:2,carrera:'Lic en administracion de empresas'},
    {id:3,carrera:'Ing en sistemas'},
    {id:4,carrera:'Ing en agronomia'},
  ]

  encabezadoGrados:string[]=['No','Nombre','Acciones'];
  constructor() { }

  ngOnInit(): void {
    this.dataSource.data=this.listaCarreras;
  }

  asiganarText(){
    this.menuComponent.asigarText("Nuevo Carrera");
  }
  
  nuevoRegistro(){
    this.textBtnRegisModifi="Registrar";
  }
  Modificar(){
    this.textBtnRegisModifi="Guardar"
  }
  
  selectRow(row) { this.selectedRow = row; 
  }

}
