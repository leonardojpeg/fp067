import { Component, Input } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { SafePipe } from '../players/safe.pipe';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, SafePipe],
  templateUrl: './detail.html',
  styleUrl: './detail.css'
})
export class Detail {
  @Input() jugador: any = null; 
}