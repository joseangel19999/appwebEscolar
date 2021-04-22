import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GrupoComponent } from './pages/grupo/grupo.component';
import { GradosComponent } from './pages/grados/grados.component';
import { MateriasComponent } from './pages/materias/materias.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { BienvedidoComponent } from './pages/bienvedido/bienvedido.component';
import { CalificacionesComponent } from './pages/calificaciones/calificaciones.component';
import { PeriodoComponent } from './pages/periodo/periodo.component';
import { ProfesoresComponent } from './pages/profesores/profesores.component';
import { AlumnoComponent } from './pages/alumno/alumno.component';
import { CarrerComponent } from './pages/carrer/carrer.component';

const escolarRouting:Routes=[
  {path:'',
  component:HomeAdminComponent,
    children: [
      {path:'bienvenido',component:BienvedidoComponent},
      {path:'calificacion',component:CalificacionesComponent},
      {path:'grado',component:GradosComponent},
      {path:'carrera',component:CarrerComponent},
      {path:'grupo',component:GrupoComponent},
      {path:'materia',component:MateriasComponent},
      {path:'periodo',component:PeriodoComponent},
      {path:'profesor',component:ProfesoresComponent},
      {path:'alumnos',component:AlumnoComponent},
      {path:'**',redirectTo:'bienvenido'}
    ]
  }
]

@NgModule({
  imports: [
   RouterModule.forChild(escolarRouting)
  ],
  exports:[
    RouterModule
  ]
})
export class EscolarRoutingModule { }
