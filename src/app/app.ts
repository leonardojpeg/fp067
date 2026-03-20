import { Component } from '@angular/core';
import { PlayersComponent } from './components/players/players.component';
import { DetailComponent } from './components/detail/detail.component';
import { MediaComponent } from './components/media/media.component';
import { Player } from './models/player.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayersComponent, DetailComponent, MediaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'EQUIPO BASKET';
  selectedPlayer?: Player;

  onPlayerSelected(player: Player) {
    this.selectedPlayer = player;
  }
}