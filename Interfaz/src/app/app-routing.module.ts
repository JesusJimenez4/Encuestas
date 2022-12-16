import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { RegisterComponent } from './Pages/login/register/register.component';
import { EncuestasComponent } from './Pages/encuestas/encuestas.component';
import { PreguntasComponent } from './Pages/encuestas/preguntas/preguntas.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {path: "login", component:LoginComponent },
  {path: "inicio", component:InicioComponent},
  {path: "registro", component:RegisterComponent},
  {path: "encuestas", component:EncuestasComponent},
  {path: "preguntas", component:PreguntasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
