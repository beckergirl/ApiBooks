export class Libro {
        push(nuevoLibro: Libro) {
          throw new Error('Method not implemented.')
        }
        lenght(): Libro[] {
          throw new Error('Method not implemented.')
        }

        public id_libro: number
        public id_usuario: number
        public titulo: string
        public tipoLibro: string
        public autor: string
        public precio: number
        public photo: string
    
        constructor( titulo: string,tipoLibro: string, autor: string,precio: number, photo: string, id_libro: number=0, id_usuario: number=0){
    
            this.titulo = titulo;
            this.tipoLibro = tipoLibro;
            this.autor = autor;
            this.precio = precio;
            this.photo = photo;
            this.id_libro = id_libro; /// valor por defecto (a 0)
            this.id_usuario = id_usuario; /// valor por defecto (a 0)
    ///de derecha izquierda // YA!
        }
 }

