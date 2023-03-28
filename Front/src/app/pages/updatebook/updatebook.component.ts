import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/shared/libros.service';
import { Router } from '@angular/router'; //tengo un cacao maravillao, si , se importa

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit{

 public Libros: Libro[]
/*  public router: Router */

  constructor( public LibrosService: LibrosService,public router: Router ){}

//métodos públicos   ///

  public actualizarLibro(nuevoTitulo: string, nuevoTipodeLibro: string, nuevoAutor: string, nuevoPrecio: number, nuevoPhoto: string, nuevoId_libro: number, nuevoId_usuario: number){
    ///EDITBOOK (PUT)
      let actualizar: Libro = new Libro(nuevoTitulo, nuevoTipodeLibro, nuevoAutor, nuevoPrecio, nuevoPhoto, nuevoId_libro, nuevoId_usuario); ///fuera Id_libro (búsqueda)
    
      this.LibrosService.editBook(actualizar) /// en servicios (actualizar libro)
      
      console.log(actualizar);
  }
  goPlace(){

    this.router.navigateByUrl("/libros");
      
  }

  
  ngOnInit(): void {
    
  }
}

