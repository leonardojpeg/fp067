import { Player } from '../models/player.model';

export const PLAYERS: Player[] = [
  { 
    id: 1, nombre: 'Giannis', apellidos: 'Antetokounmpo', posicion: 'Ala-Pívot', 
    edad: 29, altura: '2.11m', imagen: 'assets/images/giannis.jpg', 
    videoUrl: 'https://www.youtube.com/embed/v_K1D0vM2rY', 
    descripcion: 'Líder de los Bucks.' 
  },
  { 
    id: 2, nombre: 'Kevin', apellidos: 'Porter Jr.', posicion: 'Base/Escolta', 
    edad: 23, altura: '1.93m', imagen: 'assets/images/kpj.jpg', 
    videoUrl: 'https://www.youtube.com/embed/example_kpj', 
    descripcion: 'Jugador con muy buena puntiacion.' 
  },
  { 
    id: 3, nombre: 'Myles', apellidos: 'Turner', posicion: 'Pívot', 
    edad: 27, altura: '2.11m', imagen: 'assets/images/turner.jpg', 
    videoUrl: 'https://www.youtube.com/embed/example_turner', 
    descripcion: 'El mejor taponador de la liga.' 
  },
  { 
    id: 4, nombre: 'Bobby', apellidos: 'Portis', posicion: 'Ala-Pívot', 
    edad: 29, altura: '2.08m', imagen: 'assets/images/portis.jpg', 
    videoUrl: 'https://www.youtube.com/embed/MhHkH2C_q_U', 
    descripcion: 'Gran reboteador.' 
  },
  { 
    id: 5, nombre: 'A.J.', apellidos: 'Green', posicion: 'Escolta', 
    edad: 24, altura: '1.93m', imagen: 'assets/images/ajgreen.jpg', 
    videoUrl: 'https://www.youtube.com/embed/example_aj', 
    descripcion: 'Especialista en triples.' 
  }
];