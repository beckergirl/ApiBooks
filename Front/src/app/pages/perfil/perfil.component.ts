import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { isConstructorDeclaration } from 'typescript';  /// ???

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{

   public miUsuario: Usuario;

  constructor(){

    this.miUsuario = new Usuario( 1, "Irene", "Herrero Becker", "irenisima82@hotmail.com","https://i.pinimg.com/280x280_RS/71/7a/08/717a08bf7a48049f3e721cfdbf5daabb.jpg","Serpiente");
   }

   enviar(nuevoNombre: string, nuevoApellidos:  string, nuevoCorreo: string, nuevoFoto: string){

        (console.log(this.miUsuario.nombre));     /*   HTMLInputElement */

      /*   (nuevoNombre:HTMLInputElement, nuevoApellidos:  HTMLInputElement, nuevoCorreo:HTMLInputElement, nuevoUrl:HTMLInputElement) */

       /*   this.miUsuario.nombre = nuevoNombre.value;
         this.miUsuario.apellidos = nuevoApellidos.value;  /*  .value */
       /*   this.miUsuario.correo = nuevoCorreo.value;
         this.miUsuario.url =  nuevoUrl.value; */ 

         this.miUsuario.nombre = nuevoNombre;
         this.miUsuario.apellidos = nuevoApellidos;  /*  .value */
         this.miUsuario.correo = nuevoCorreo;
         this.miUsuario.foto =  nuevoFoto;
         
   }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}

