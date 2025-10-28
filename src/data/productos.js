// Importaciones de imágenes
import switchPokemonScarlet from '../assets/img/switch pokemon scarlet.webp';
import ps5UnchartedLegacy from '../assets/img/ps5 uncharted legacy of thieves.webp';
import xboxCallOfDutyColdWar from '../assets/img/xbox call of duty cold war.webp';
import nintendoSwitch from '../assets/img/nintendo switch.jpg';
import playstation5Pro from '../assets/img/playstation 5 pro.webp';
import xboxSeriesX from '../assets/img/xbox one x.jpg';
import tecladoRazer from '../assets/img/teclado razer blackwidow v3.jpg';
import monitorAsus from '../assets/img/monitor asus tuf gaming 27.jpg';
import juegoMesaCatan from '../assets/img/juego de mesa catan.webp';
import hyperXCloudII from '../assets/img/HyperX Cloud II.webp';
import sillaGamerSecretlab from '../assets/img/Silla Gamer Secretlab Titan.jpg';
import mouseLogitech from '../assets/img/Mouse Gamer Logitech G502 HERO.webp';
import eldenRing from '../assets/img/elden ring.webp';
import redDeadRedemption2 from '../assets/img/read dead redemption 2.webp';
import marioKartDeluxe from '../assets/img/martio kart deluxe.webp';

// Datos simulados de productos para la tienda gaming
// Lista de productos disponibles, sacada del carrito.js original
export const productos = [
  { id: 1, nombre: "Nintendo Switch - Pokémon Scarlet", precio: 59990, categoria: "Videojuegos", imagen: switchPokemonScarlet },
  { id: 2, nombre: "Playstation 5 - Uncharted: Legacy of Thieves", precio: 39990, categoria: "Videojuegos", imagen: ps5UnchartedLegacy },
  { id: 3, nombre: "Xbox One - Call of Duty Cold War", precio: 49990, categoria: "Videojuegos", imagen: xboxCallOfDutyColdWar },
  { id: 4, nombre: "Consola Nintendo Switch", precio: 399990, categoria: "Consolas", imagen: nintendoSwitch },
  { id: 5, nombre: "Consola Playstation 5 Pro", precio: 599990, categoria: "Consolas", imagen: playstation5Pro },
  { id: 6, nombre: "Consola Xbox Series X", precio: 499990, categoria: "Consolas", imagen: xboxSeriesX },
  { id: 7, nombre: "Teclado Mecánico Razer BlackWidow V3", precio: 119990, categoria: "Periféricos", imagen: tecladoRazer },
  { id: 8, nombre: "Monitor Gamer ASUS TUF Gaming 27''", precio: 259990, categoria: "Periféricos", imagen: monitorAsus },
  { id: 9, nombre: "Juego de Mesa Catan", precio: 34990, categoria: "Juegos de Mesa", imagen: juegoMesaCatan },
  { id: 10, nombre: "Auriculares Gamer HyperX Cloud II", precio: 79990, categoria: "Periféricos", imagen: hyperXCloudII },
  { id: 11, nombre: "Silla Gamer Secretlab Titan", precio: 349990, categoria: "Sillas", imagen: sillaGamerSecretlab },
  { id: 12, nombre: "Mouse Gamer Logitech G502 HERO", precio: 49990, categoria: "Periféricos", imagen: mouseLogitech },
  { id: 13, nombre: "Playstation 5 - Elden Ring", precio: 59990, categoria: "Videojuegos", imagen: eldenRing },
  { id: 14, nombre: "Xbox One - Red Dead Redemption 2", precio: 59990, categoria: "Videojuegos", imagen: redDeadRedemption2 },
  { id: 15, nombre: "Nintendo Switch - Mario Kart Deluxe", precio: 59990, categoria: "Videojuegos", imagen: marioKartDeluxe }
];

// Esta es la lista base de productos, igual a la del HTML viejo, para simular la tienda. Se puede expandir después en caso de necesitarlo.