import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

interface UserData {
  id:number,
  nombreCompleto: string;
  matricula: string;
}
interface dataCal {
  id:number,
  materia:string,
  M1:number,
  M2:number,
  M3:number,
  M4:number,
  M5:number,
  final: number;
}
@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent implements OnInit {

    //cabezera de la tabla
    displayedColumns: string[] = ['posicion', 'matricula', 'nombre', 'acciones'];
    //cabezera de la tabla
    displayedColumnsCal: string[] = ['materia', 'm1', 'm2','m3','m4','m5', 'final'];

    @ViewChild(MatPaginator) paginator: MatPaginator;
    public dataSource = new MatTableDataSource;
    public dataSourceCal = new MatTableDataSource;
    page_size:number=3;
    page_number:number=1;
    pageSizeOptions=[3,5,10];
    selectedRow;
    textBtnRegisModifi:string="Registrar";
 
    profesores:UserData[]=[
      {id:1,nombreCompleto:'Jose angel hernandez hernandez',matricula:'8767868'},
      {id:1,nombreCompleto:'Jose angel hernandez hernandez',matricula:'8767868'},
      {id:1,nombreCompleto:'Jose angel hernandez hernandez',matricula:'8767868'},
      {id:1,nombreCompleto:'Jose angel hernandez hernandez',matricula:'8767868'},
      {id:1,nombreCompleto:'Jose angel hernandez hernandez',matricula:'8767868'},
      {id:1,nombreCompleto:'Jose angel hernandez hernandez',matricula:'8767868'},
      {id:1,nombreCompleto:'Jose angel hernandez hernandez',matricula:'8767868'},
      {id:1,nombreCompleto:'Jose angel hernandez hernandez',matricula:'8767868'},
      {id:1,nombreCompleto:'Jose angel hernandez hernandez',matricula:'8767868'},
      {id:1,nombreCompleto:'Jose angel hernandez hernandez',matricula:'8767868'},
      {id:1,nombreCompleto:'Jose angel hernandez hernandez',matricula:'8767868'},
      {id:1,nombreCompleto:'Jose angel hernandez hernandez',matricula:'8767868'},
      {id:1,nombreCompleto:'Jose angel hernandez hernandez',matricula:'8767868'},
      {id:1,nombreCompleto:'Jose angel hernandez hernandez',matricula:'8767868'},
      {id:1,nombreCompleto:'Jose angel hernandez hernandez',matricula:'8767868'},
      {id:1,nombreCompleto:'Jose angel hernandez hernandez',matricula:'8767868'},
      {id:1,nombreCompleto:'Jose angel hernandez hernandez',matricula:'8767868'},
      {id:1,nombreCompleto:'Jose angel hernandez hernandez',matricula:'8767868'},
      {id:1,nombreCompleto:'Jose angel hernandez hernandez',matricula:'8767868'},
      {id:2,nombreCompleto:'Jose angel',matricula:'8767868'},
      {id:3,nombreCompleto:'Jose angel',matricula:'8767868'},
      {id:4,nombreCompleto:'Jose angel',matricula:'8767868'},
    ];
    calificaciones:dataCal[]=[
      {id:1,materia:'Matecaticas',M1:9,M2:8,M3:10,M4:9,M5:10,final:9},
      {id:2,materia:'Ingles',M1:9,M2:8,M3:10,M4:9,M5:10,final:9},
      {id:3,materia:'Fisica',M1:9,M2:8,M3:10,M4:9,M5:10,final:9},
      {id:4,materia:'Estadisticas',M1:9,M2:8,M3:10,M4:9,M5:10,final:9},
      {id:5,materia:'Literatura',M1:9,M2:8,M3:10,M4:9,M5:10,final:9},
      {id:6,materia:'Normas y leyes',M1:9,M2:8,M3:10,M4:9,M5:10,final:9},
    ];
  constructor() { }

  ngOnInit(): void {

    this.dataSource.data=this.profesores;
    this.dataSourceCal.data=this.calificaciones
  }

  disableSelect = new FormControl(false);
  Modificar(){
    this.textBtnRegisModifi="Guardar"
  }
  
  selectRow(row) { this.selectedRow = row; 
  }
}
