import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/shared/libros.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit{


  public Libros: Libro[];
  
  constructor(public LibrosService: LibrosService, public router: Router){

    this.Libros = [

      new Libro ("Las Correcciones", "Libro de bolsillo","Jonathan Franzen", 24.50, "https://m.media-amazon.com/images/I/717Dxu4o0VL.jpg", 101,1),
      new Libro ("4, 3, 2, 1", "Libro de bolsillo","Paul Auster", 22.50, "https://imagessl6.casadellibro.com/a/l/t7/26/9788429776126.jpg", 202, 2),
      new Libro ("En el camino", "novela américana","Jack Kerouac", 26.50, "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQA3CQ4B-sA78Eh0M-V8kbEiXVu8Hji70jPeOWXPitn4lr31Lui", 303, 3),
      new Libro ("Middlesex", "Libro de bolsillo","Jeffrey Eugenides" , 28.50, "https://www.anagrama-ed.es/uploads/media/portadas/0001/16/d86b81e53fc2fc900d0164956519c3d31a894bec.jpeg", 404,4),

    ]
  }


// 
  public subirLibro(nuevoTitulo: string, nuevoAutor: string, nuevoTipodeLibro: string, nuevoPrecio: number, nuevoPhoto: string, nuevoId_libro: number, nuevoId_usuario: number){
//métodos públicos
    let subirLibro: Libro = new Libro(nuevoTitulo, nuevoAutor,nuevoTipodeLibro, nuevoPrecio, nuevoPhoto, nuevoId_libro, nuevoId_usuario);
  // (put)
    this.LibrosService.addBook(subirLibro)  /// en servicios (añadir libro)
    console.log(subirLibro); //esto no es
     /*  this.LibrosService.libro = new Libro(nuevoTitulo, nuevoTipodeLibro, nuevoAutor, nuevoPrecio, nuevoPhoto, nuevoId_libro,nuevoId_usuario); */ 

    }

  
  
    goPlace(){

      this.router.navigateByUrl("/libros");
        
    }

  ngOnInit(): void {
    throw new Error('Method not implemented.');

  } 
}

