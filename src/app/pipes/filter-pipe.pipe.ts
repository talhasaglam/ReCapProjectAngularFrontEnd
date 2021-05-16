import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Car[], filterText: string): Car[] {
    filterText = filterText?filterText.toLocaleLowerCase():"" // filtertext varsa küçük yazıya çevir yoksa null
    return filterText?value                                    //value.filter arraya uyan filteri array oluşturuyor. filter forecach yapıyor -1 den
    .filter((p:Car)=>p.description.toLocaleLowerCase().indexOf(filterText)!==-1) // den farklı yani vasrsa döndür diyoruz.
    :value;
 
  }

}

//map,filter 
//value.filter arraya uyan filteri array oluşturuyor. filter forecach yapıyor -1 den
// den farklı yani vasrsa döndür diyoruz.

