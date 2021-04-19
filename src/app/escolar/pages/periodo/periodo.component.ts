import { StmtModifier } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

interface periodoData {
  id:number,
  periodo: number;
}

@Component({
  selector: 'app-periodo',
  templateUrl: './periodo.component.html',
  styleUrls: ['./periodo.component.css']
})
export class PeriodoComponent implements OnInit {
 //cabezera de la tabla
 cabezeraTblPeriodos: string[] = ['posicion', 'periodo','acciones'];
 @ViewChild(MatPaginator) paginador:MatPaginator;
 public dataSource = new MatTableDataSource;
 page_size:number=3;
 page_number:number=1;
 pageSizeOptions=[3,5,10];
 //
 textBtnRegisModifi:string="Registrar";
 selectedRow;


 listaPeriodos:periodoData[]=[
   {id:1,periodo:2010},
   {id:2,periodo:2011},
   {id:3,periodo:2012},
   {id:4,periodo:2013},
   {id:5,periodo:2014},

 ]
  constructor() { }

  ngOnInit(): void {
    this.dataSource.data=this.listaPeriodos;
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
