import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/pages/login/login.component';
import { HomeComponent } from './home/home.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';

const routePaheInicio:Routes=[
    {path:'',
    component:HomeComponent,
    children: [
        {path:'bienvenida',component:BienvenidaComponent},
        {path:'login',component:LoginComponent},
        {path:'acercade',component:AcercadeComponent},
        {path:'**',redirectTo:'bienvenida'}
    ]
    }
]
@NgModule({
    imports:[
        RouterModule.forChild(routePaheInicio)
    ],
    exports:[
        RouterModule
    ]
})
export class PageInicioRouting{}