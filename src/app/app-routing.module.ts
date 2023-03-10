import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditSkillComponent } from './components/habilidades/edit-skill.component';
import { NewSkillComponent } from './components/habilidades/new-skill.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { EditproyectoComponent } from './components/proyectos/editproyecto.component';
import { NewproyectoComponent } from './components/proyectos/newproyecto.component';

const routes: Routes = [
  {path: '', component:InicioComponent},
  {path: 'login', component:LoginComponent},
  {path:'nuevaexp',component:NewExperienciaComponent},
  {path:'editexp/:id',component:EditExperienciaComponent},
  {path:'nuevaedu',component:NeweducacionComponent},
  {path:'editedu/:id',component:EditeducacionComponent},
  {path: 'newskill',component:NewSkillComponent},
  {path: 'editskill/:id',component:EditSkillComponent},
  {path:'nuevoproyecto',component:NewproyectoComponent},
  {path:'editproyecto/:id',component:EditproyectoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
