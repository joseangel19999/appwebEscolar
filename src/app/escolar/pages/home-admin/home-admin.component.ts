import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

interface menuItem{
  nombre:string,
  ruta:string,
  icono:string
}
@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  public modo:boolean=false;
  constructor() { }

  ngOnInit(): void {

  }
  
  mostrarCerrar(sidenav:MatSidenav){    
    if (sidenav.mode=='side'){
      return sidenav.toggle();
    } 
  }

  menuEscolar:menuItem[]=[

    { nombre:'Profesores',ruta:'./profesor',icono:'turned_in_not'},
    {nombre:'Grupos',ruta:'./grupo',icono:'assignment'},
    {nombre:'Calificaciones',ruta:'./calificacion',icono:'turned_in_not'},
    {nombre:'Grados',ruta:'./grado',icono:'library_books'},
    {nombre:'Periodo',ruta:'./periodo',icono:'article'},
    {nombre:'Materia',ruta:'./materia',icono:'article'},
    {nombre:'Bienvenido',ruta:'./bienvenido',icono:'article'},

  ]


}


 
