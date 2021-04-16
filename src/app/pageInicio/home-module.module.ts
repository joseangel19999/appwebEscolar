import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { LoginComponent } from './login/login.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { PageInicioRouting } from './homInicioRouting';
import { MaterialModuleModule } from '../angularMaterial/material-module.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    BienvenidaComponent
    , LoginComponent
    , AcercadeComponent
    ,HomeComponent
  ],
  imports: [
    CommonModule,
    PageInicioRouting,
    MaterialModuleModule,
    PageInicioRouting,

  ]
})
export class HomeModuleModule { }
