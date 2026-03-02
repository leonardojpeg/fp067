import { Component } from '@angular/core';
import { PlayersComponent } from './components/players/players.component';
import { DetailComponent } from './components/detail/detail.component';
import { MediaComponent } from './components/media/media.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayersComponent, DetailComponent, MediaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent { // Verifica que posi AppComponent aquí
  title = 'EQUIPO BASKET';
}