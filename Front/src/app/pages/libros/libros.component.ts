import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/shared/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export default class LibrosComponent {

  public libros: Libro[];

  constructor(public LibrosService: LibrosService){

    this.libros = this.LibrosService.getAllBooks();
  
  }
    
    public buscarLibro(id_libro: string){

      if(id_libro == ""){

        this.libros = this.LibrosService.getAllBooks()

      }else{ 

        this.libros = [this.LibrosService.getOneBook(parseInt(id_libro))]
      }
    }
    public borrarLibro(id_libro: number ){

      let libroYes = this.LibrosService.deleteBook(id_libro)
      if(!libroYes){

        console.log("El libro no existe");
      }
    }

  
}

  
/*    enviar(nuevoId_libro: number, nuevoId_usuario: number, nuevoTitulo: string, nuevoTipodeLibro: string, nuevoAutor: string, nuevoPrecio: number, nuevoPhoto: string){

    this.miLibro.id_libro = nuevoId_libro;
    this.miLibro.id_usuario = nuevoId_usuario;
    this.miLibro.titulo = nuevoTitulo;
    this.miLibro.tipoLibro = nuevoTipodeLibro;
    this.miLibro.autor = nuevoAutor;
    this.miLibro.precio = nuevoPrecio;
    this.miLibro.photo = nuevoPhoto; */

  /* ngOnInit(): void {
    throw new Error('Method not implemented.');
  } */



