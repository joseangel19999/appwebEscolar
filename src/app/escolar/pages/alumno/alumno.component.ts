import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MenuRegistrarComponent } from '../../components/menu-registrar/menu-registrar.component';
import { RegistroAlumnoComponent } from '../../components/registro-alumno/registro-alumno.component';


interface UserData {
  id:number,
  nombreCompleto: string;
  curp:string;
  fechaNacimmiento:string;
  telefono:string;
  correo: string;
  fechaImgreso:string
  idCarrera:number;
  idPeriodo:number;
}
interface UserData2 {
  id:number,
  matricula:string;
  nombreCompleto: string;
  correo: string;
  telefono:string;
  direccion:string;
}
@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

   //cabezera de la tabla
   displayedColumns: string[] = ['posicion','matricula','nombre', 'correo','telefono','direccion', 'acciones'];

   @ViewChild(MatPaginator) paginator: MatPaginator;
   public dataSource = new MatTableDataSource;
   page_size:number=3;
   page_number:number=1;
   pageSizeOptions=[3,5,10];

   textBtnRegisModifi:string="Registrar";

   selectedRow;
  //mandar evento a componente hijo
  @ViewChild(MenuRegistrarComponent) menuComponent: MenuRegistrarComponent;

  listaAlumnos:UserData2[]=[
    {id:1,matricula:'2015001',nombreCompleto:'Jose angel hernandez hernandez',correo:'jose123_uthh@gmail.com',telefono:'2538371829',direccion:'san lorenzo san felipe orizatlan'},
    {id:2,matricula:'2015002',nombreCompleto:'Jose angel',correo:'jose@gmail.com',telefono:'2538371829',direccion:'san lorenzo san felipe orizatlan'},
    {id:3,matricula:'2015003',nombreCompleto:'Jose angel',correo:'jose@gmail.com',telefono:'2538371829',direccion:'san lorenzo san felipe orizatlan'},
    {id:4,matricula:'2015004',nombreCompleto:'Jose angel',correo:'jose@gmail.com',telefono:'2538371829',direccion:'san lorenzo san felipe orizatlan'},
  ];


  constructor(private matDialog:MatDialog) { }

  ngOnInit(): void {
    this.dataSource.data=this.listaAlumnos;
  }
  asiganarText(){
    this.menuComponent.asigarText("Nuevo alumno");
  }
  
  nuevoRegistro(){
    this.textBtnRegisModifi="Registrar";
  }
  Modificar(){
    this.textBtnRegisModifi="Guardar"
  }
  
  selectRow(row) { this.selectedRow = row; 
  }


  mostrarRegistrodialog(texto:string){
    if(texto=="Registrar"){
     this.matDialog.open(RegistroAlumnoComponent,{
      width:"500px"
    }) 
    }
    console.log(texto);
  }

}
