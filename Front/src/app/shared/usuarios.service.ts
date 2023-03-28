import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url = "http://localhost:4000/usuarios"

  public usuarios: Usuario;/*  public usuarios: Usuario; (en reto 3) sin array*/
  public logueado: boolean; // public logueado:boolean (reto3)

  constructor(private http: HttpClient){ 

 
    this.logueado = false; // aquí controlaremos con true y false si el usuario a iniciado sesión en la app.
  }

  public register(usuarios: Usuario){ //método que llamará al endpoint Post"/registro"

    return this.http.post(this.url + "/registro", usuarios); // funcionan en postman
  }

  public login(usuarios: Usuario){ //método para llamar al endpoint post"/login"

    return this.http.post(this.url + "/login",usuarios);  // funcionan en postman
  }

  //////////////////////////////////////////////////////

  getUsuario(id_usuario: number){

    return this.http.get(this.url + "/" + id_usuario);
  }

  postUsuario(newUser: Usuario){

    return this.http.post(this.url, newUser);
  }
  getUsuarios(){

    return this.http.get(this.url)
  }

  delUsuario(id_usuario:any){

    console.log(id_usuario);
    //const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: id}
    const httpOptions = {headers: null, body: id_usuario}
    return this.http.delete(this.url, httpOptions)
  }
}

