import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from 'src/app/shared/usuarios.service';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent {

  public usuarios: Usuario;

  constructor(private usuariosService: UsuariosService) {}

  public registrarse(id_usuario: number, nuevoNombre: string, nuevoApellidos: string, nuevoCorreo: string, nuevoFoto: string, nuevoPassword: string, nuevoPasswordmatch:string){  /// registrar usuario
    
       if(nuevoPassword == nuevoPasswordmatch){ //tiene que haber un number(id_usuario )de la bbdd, porque si no da error)

        this.usuariosService.register(new Usuario(id_usuario,nuevoNombre, nuevoApellidos, nuevoCorreo, nuevoFoto, nuevoPassword)).subscribe((data: Usuario)=>{

          this.usuariosService.usuarios = data;
        })
       }else{

        console.log("Las contraseñas NO coinciden.")
       }
    
  }

}
