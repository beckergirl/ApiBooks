export class Usuario {

    public id_usuario: number
    public nombre: string
    public apellidos: string
    public correo:string
    public foto: string
    public password: string

    constructor(id_usuario: number, nombre: string, apellidos: string, correo: string, url: string, password: string){

        this.id_usuario = id_usuario;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.correo = correo;
        this.foto = url;
        this.password = password

    }
}
