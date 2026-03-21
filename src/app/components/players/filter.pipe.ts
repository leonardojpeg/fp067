import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) return items;
    
    const text = searchText.toLowerCase();
    
    return items.filter(it => 
      it.nombre.toLowerCase().includes(text) || 
      it.apellidos.toLowerCase().includes(text) ||
      it.posicion.toLowerCase().includes(text)
    );
  }
}