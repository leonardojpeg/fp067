import { Player } from '../models/player.model';

export const PLAYERS: Player[] = [
  {
    id: 1, nombre: 'Giannis', apellidos: 'Antetokounmpo', posicion: 'Ala-Pívot',
    edad: 29, altura: '2.11m', imagen: 'assets/images/Antetokounmpo.jpg',
    videoUrl: 'assets/videos/giannis.mp4',
    descripcion: 'Líder de los Bucks.'
  },
  {
    id: 2, nombre: 'Kevin', apellidos: 'Porter Jr.', posicion: 'Base/Escolta',
    edad: 23, altura: '1.93m', imagen: 'assets/images/kevin porter jr.avif',
    videoUrl: 'assets/videos/kevinporter.mp4',
    descripcion: 'Jugador con muy buena puntuación.'
  },
  {
    id: 3, nombre: 'Myles', apellidos: 'Turner', posicion: 'Pívot',
    edad: 27, altura: '2.11m', imagen: 'assets/images/myles turner.webp',
    videoUrl: 'assets/videos/mylesturner.mp4',
    descripcion: 'El mejor taponador de la liga.'
  },
  {
    id: 4, nombre: 'Bobby', apellidos: 'Portis', posicion: 'Ala-Pívot',
    edad: 29, altura: '2.08m', imagen: 'assets/images/bobby portis.webp',
    videoUrl: 'assets/videos/bobbyportis.mp4',
    descripcion: 'Gran reboteador.'
  },
  {
    id: 5, nombre: 'A.J.', apellidos: 'Green', posicion: 'Escolta',
    edad: 24, altura: '1.93m', imagen: 'assets/images/AJ GREEN.webp',
    videoUrl: 'assets/videos/ajgreen.mp4',
    descripcion: 'Especialista en triples.'
  }
];