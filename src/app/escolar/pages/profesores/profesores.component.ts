import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MenuRegistrarComponent } from '../../components/menu-registrar/menu-registrar.component';

 interface UserData {
  id:number,
  nombreCompleto: string;
  correo: string;
}
@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {
   //cabezera de la tabla
   displayedColumns: string[] = ['posicion', 'nombre', 'correo', 'acciones'];

   @ViewChild(MatPaginator) paginator: MatPaginator;
   public dataSource = new MatTableDataSource;
   page_size:number=3;
   page_number:number=1;
   pageSizeOptions=[3,5,10];
   textBtnRegisModifi:string="Registrar";
   selectedRow;
  //mandar evento a componente hijo
  @ViewChild(MenuRegistrarComponent) menuComponent: MenuRegistrarComponent;

   profesores:UserData[]=[
     {id:1,nombreCompleto:'Jose angel hernandez hernandez',correo:'jose123_uthh@gmail.com'},
     {id:2,nombreCompleto:'Jose angel',correo:'jose@gmail.com'},
     {id:3,nombreCompleto:'Jose angel',correo:'jose@gmail.com'},
     {id:4,nombreCompleto:'Jose angel',correo:'jose@gmail.com'},
   ];

  constructor() {
    
  }
  ngOnInit(): void {

    this.dataSource.data=this.profesores;
  }

  asiganarText(){
    this.menuComponent.asigarText("Nuevo profersor");
  }
  

 

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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
