import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from '../models/libro';

///Me quedo aquí en los servicios

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private libros : Libro[];


  constructor(){  /// libros está privado, hay que hacer getters y setters.

    this.libros = [  

      new Libro ("Las Correcciones", "Libro de bolsillo","Jonathan Franzen", 24.50, "http://2.bp.blogspot.com/-rdzYhd7exXM/UKD8HshRLfI/AAAAAAAAAPY/gg0Ov6BKnW8/s1600/Las+correcciones+-+Jonathan+Frazen.jpg", 101,1),
      new Libro ("4, 3, 2, 1", "Libro de bolsillo","Paul Auster", 22.50, "https://imagessl6.casadellibro.com/a/l/t7/26/9788429776126.jpg", 202, 2),
      new Libro ("En el camino", "novela américana","Jack Kerouac", 26.50, "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQA3CQ4B-sA78Eh0M-V8kbEiXVu8Hji70jPeOWXPitn4lr31Lui", 303, 3),
      new Libro ("Middlesex", "Libro de bolsillo","Jeffrey Eugenides" , 28.50, "https://www.anagrama-ed.es/uploads/media/portadas/0001/16/d86b81e53fc2fc900d0164956519c3d31a894bec.jpeg", 404,4),
      new Libro ("Lolita", "Libro de bolsillo","Vladimir Nabokov" , 12.50, "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Lolita_1955.JPG/220px-Lolita_1955.JPG", 505,5),

    ] 
  }
    //Repaso de Fundamentos.Métodos. En este bloque se implementarán los métodos que vayamos a usar (setters y getters en caso de que sea necesarios, o métodos privados si se necesitan).

    public setLibros(Libros: Libro[]){

      this.libros = Libros;

      return Libros;
    }
    public getLibros(): Libro[]{

      return this.libros;
    }
    // métodos públicos:

    public getAllBooks(): Libro[]{   /// GET (mostrar todos) 

      return this.libros;
    }

    public getOneBook(id_libro: number): Libro{   ///GET (buscar por id de Libro)

      let getone: Libro;
      for(let i = 0; i < this.libros.length; i++){

        if(id_libro == this.libros[i].id_libro){

          getone = this.libros[i]
        }
      }
         return getone;
    }

    public addBook(subirLibro: Libro): void{   /// añadir (POST en postman)

      this.libros.push(subirLibro) /// libros (cuando añadía un nuevo libro a libros)

    }
///////////////////NO FUNCIONA
   public editBook(actualizar: Libro): boolean{  //// modificar (PUT en postman) (true o false) actualizar en updatelibro 

       let libroTrue = this.libros.find(element => element.id_libro == actualizar.id_libro); 
       let identificado = libroTrue != undefined;  // buscar libro por id de libro , si en Libros encuentra el id , actualizar libro.

        if(identificado == true){ 

            libroTrue.titulo = actualizar.titulo,
            libroTrue.autor = actualizar.autor,
            libroTrue.tipoLibro = actualizar.tipoLibro,
            libroTrue.precio = actualizar.precio,
            libroTrue.photo = actualizar.photo,
          /*   libroTrue.id_libro = actualizarLibro.id_libro, */  /////porque lo identificamos por ese ID y actualizamos
            libroTrue.id_usuario =actualizar.id_usuario

         }else{

         /*  identificado = false; */

         } 
// comprobar que no pase nada por no usar un else, (else vacio)
           return identificado
        } 
   
    public deleteBook(id_libro: number): boolean {

          let buscarid: number = this.libros.findIndex(element => element.id_libro == id_libro);
          let eliminarLibro: boolean = buscarid != -1;

          if (eliminarLibro){

            this.libros.splice(buscarid, 1);  // buscar y borrar y borrar 1 elemento
          } else {

            let message = "No se encuentra el libro"
            console.log(message);
          }
          return eliminarLibro
        }
  }

/*   - getAll(userId:number):Observable<Object>. Devuelve la llamada al endpoint GET “/libros”. - getOne(userId:number, id_libro:number):Observable<Object>.
Devuelve la llamada al endpoint GET “/libros?id”.
- add(libro:Libro):Observable<Object>. Devuelve la llamada al endpoint POST “/libros”.
- edit(libro:Libro):Observable<Object>. Devuelve la llamada al endpoint PUT “/libros”.
- delete(id_libro:number):Observable<Object>. Devuelve la llamada al endpoint DELETE ”/libros”. */



