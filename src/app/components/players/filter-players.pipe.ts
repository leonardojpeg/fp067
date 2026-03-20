import { Pipe, PipeTransform } from '@angular/core';
import { Player } from '../../models/player.model';

@Pipe({
  name: 'filterPlayers',
  standalone: true
})
export class FilterPlayersPipe implements PipeTransform {

  transform(players: Player[], searchText: string, searchPosicion: string): Player[] {
    if (!players) return [];

    let filteredPlayers = players;

    if (searchText && searchText.trim() !== '') {
      const text = searchText.toLowerCase().trim();
      filteredPlayers = filteredPlayers.filter(player => 
        player.nombre.toLowerCase().includes(text) || 
        player.apellidos.toLowerCase().includes(text)
      );
    }

    if (searchPosicion && searchPosicion.trim() !== '') {
      const pos = searchPosicion.toLowerCase().trim();
      filteredPlayers = filteredPlayers.filter(player => 
        player.posicion.toLowerCase().includes(pos)
      );
    }

    return filteredPlayers;
  }

}
