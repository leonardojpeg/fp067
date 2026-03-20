import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../../models/player.model';
import { PLAYERS } from '../../data/players-mock';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './players.html',
  styleUrl: './players.css',
})
export class PlayersComponent {
  players: Player[] = PLAYERS;
  
  @Output() playerSelected = new EventEmitter<Player>();
  
  selectedPlayer?: Player;

  onSelect(player: Player): void {
    this.selectedPlayer = player;
    this.playerSelected.emit(player);
  }
}
