import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'referencia'
})
export class LibrosPipe implements PipeTransform {

  transform(id_libro: number): string{
     
    let result: string;

    result = "Ref-" + id_libro;


    return result;
  }

}
