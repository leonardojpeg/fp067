import { Component, Output, EventEmitter } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { FilterPipe } from './filter.pipe';   

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterPipe],
  templateUrl: './players.html',
  styleUrl: './players.css'
})
export class Players {
  @Output() jugadorSeleccionado = new EventEmitter<any>();
  
  searchText: string = ''; 

  jugadores = [
    { id: 1, nombre: 'LeBron', apellidos: 'James', posicion: 'Alero', edad: 39, altura: '2.06m', video: 'https://www.youtube.com/embed/fEui_r4X1PE' },
    { id: 2, nombre: 'Luka', apellidos: 'Doncic', posicion: 'Base', edad: 25, altura: '2.01m', video: 'https://www.youtube.com/embed/dO14Pt11sE8' },
    { id: 3, nombre: 'Stephen', apellidos: 'Curry', posicion: 'Base', edad: 36, altura: '1.88m', video: 'https://www.youtube.com/embed/NHhTMh0nURA' },
    { id: 4, nombre: 'Giannis', apellidos: 'Antetokounmpo', posicion: 'Ala-Pívot', edad: 29, altura: '2.11m', video: 'https://www.youtube.com/embed/rp8mc34NztY' },
    { id: 5, nombre: 'Nikola', apellidos: 'Jokic', posicion: 'Pívot', edad: 29, altura: '2.11m', video: 'https://www.youtube.com/embed/7A-QGpW2GnA' }
  ];

  seleccionar(j: any) { 
    this.jugadorSeleccionado.emit(j); 
  }
}