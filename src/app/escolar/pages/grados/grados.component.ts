import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MenuRegistrarComponent } from '../../components/menu-registrar/menu-registrar.component';

interface gradodoData {
  id:number,
  grado: string;
}
@Component({
  selector: 'app-grados',
  templateUrl: './grados.component.html',
  styleUrls: ['./grados.component.css']
})
export class GradosComponent implements OnInit {
 //cabezera de la tabla
 displayedColumns: string[] = ['posicion', 'grado', 'acciones'];

 textBtnRegisModifi:string="Registrar";
 selectedRow;
 @ViewChild(MatPaginator) paginador:MatPaginator;
 public dataSource = new MatTableDataSource;

  encabezadoGrados:string[]=['No','Nombre','Acciones'];
  constructor() { }

    //mandar evento a componente hijo
    @ViewChild(MenuRegistrarComponent) menuComponent: MenuRegistrarComponent;
    
    
 listaGrados:gradodoData[]=[
  {id:1,grado:'2010'},
  {id:2,grado:'2011'},
  {id:3,grado:'2012'},
  {id:4,grado:'2013'},
  {id:5,grado:'2014'},

]

  ngOnInit(): void {
    this.dataSource.data=this.listaGrados;
  }

  asiganarText(){
    this.menuComponent.asigarText("Nuevo grado");
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
