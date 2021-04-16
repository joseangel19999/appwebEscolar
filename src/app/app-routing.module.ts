import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { ErrorPagesComponent } from './shared/error-pages/error-pages.component';

const appRouting:Routes=[
   {path:'escolar',
    loadChildren:()=>import('./escolar/app-escolar.module').then(m=>m.AppEscolarModule),
  },
  {path:'auth',
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {path:'pagaInicio',
   loadChildren:()=>import('./pageInicio/home-module.module').then(m=>m.HomeModuleModule)
  },
  {path:'login',component:LoginComponent},
  {path:'404',component:ErrorPagesComponent},
  {path:'**',redirectTo:'pagaInicio'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRouting)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
