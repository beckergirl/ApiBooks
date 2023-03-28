import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from "./pages/registro/registro.component";
import { PerfilComponent } from './pages/perfil/perfil.component';
import LibrosComponent from './pages/libros/libros.component';
import { AddbookComponent } from './pages/addbook/addbook.component';
import { UpdatebookComponent } from './pages/updatebook/updatebook.component';
import {  LoginComponent } from './pages/login/login.component';

const routes: Routes = [

  {path: "home",component: HomeComponent },
  {path: "formulario",component: RegistroComponent },
  {path: "perfil",component: PerfilComponent },
  {path: "libros",component:LibrosComponent },
  {path: "añadirLibros",component: AddbookComponent },
  {path: "modificarLibros",component: UpdatebookComponent},
  {path: "login",component: LoginComponent},
  {path: "", pathMatch: "full", redirectTo: "home"}, // que la página de inicio sea HOME


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
