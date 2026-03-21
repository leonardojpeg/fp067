import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Players } from './components/players/players';
import { Detail } from './components/detail/detail';
import { Media } from './components/media/media';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Players, Detail, Media],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  jugadorElegido: any = null; 
  
  protected readonly title = signal('equipo-basket');
}