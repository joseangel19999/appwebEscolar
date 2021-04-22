import { NgModule } from '@angular/core';
import { MaterialModuleModule } from '../angularMaterial/material-module.module';
import { EscolarRoutingModule } from './escolar-routing.module';
import { GrupoComponent } from './pages/grupo/grupo.component';
import { GradosComponent } from './pages/grados/grados.component';
import { MateriasComponent } from './pages/materias/materias.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { BienvedidoComponent } from './pages/bienvedido/bienvedido.component';
import { MenuToggleComponent } from './components/menu-toggle/menu-toggle.component';
import { CommonModule } from '@angular/common';
import { ProfesoresComponent } from './pages/profesores/profesores.component';
import { CalificacionesComponent } from './pages/calificaciones/calificaciones.component';
import { PeriodoComponent } from './pages/periodo/periodo.component';
import { MenuRegistrarComponent } from './components/menu-registrar/menu-registrar.component';
import { AlumnoComponent } from './pages/alumno/alumno.component';
import { RegistroAlumnoComponent } from './components/registro-alumno/registro-alumno.component';
import { CarrerComponent } from './pages/carrer/carrer.component';



@NgModule({
  declarations: [
    GrupoComponent, 
    GradosComponent, 
    MateriasComponent, 
    HomeAdminComponent, 
    BienvedidoComponent, 
    MenuToggleComponent, ProfesoresComponent, CalificacionesComponent, PeriodoComponent, MenuRegistrarComponent, AlumnoComponent, RegistroAlumnoComponent, CarrerComponent,

  
  ],
  imports: [
    CommonModule,
    EscolarRoutingModule,
    MaterialModuleModule,
  ]
})
export class AppEscolarModule { }
