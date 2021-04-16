import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
const authRouting:Routes=[
  {path:'auth',
   children:[
      {path:'login',component:LoginComponent},
      {path:'registro',component:RegistroComponent},
      {path:'**',redirectTo:'login'}
   ]
  },
  
]
@NgModule({
  imports: [
     RouterModule.forChild(authRouting)
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule { }
