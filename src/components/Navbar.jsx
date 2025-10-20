// ====================================
// Navbar - Barra de navegación principal
// ====================================

import { Link } from "react-router-dom";
import logo from "../assets/img/logo-lvl-up.png";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        {/* Logo */}
        <Link to="/">
          <img src={logo} width="120px" alt="Logo de Level-Up Gamer" />
        </Link>

        {/* Menú principal */}
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
          <li>
            <Link to="/nosotros">Nosotros</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>

        {/* Menú derecha - Carrito y usuario */}
        <div className="menu-derecha">
          <Link to="/carrito" id="enlaceCarrito">
            <i className="fa-solid fa-cart-shopping" /> Carrito
            <span id="contadorCarrito" className="contador-carrito">
              0
            </span>
          </Link>
          <Link to="/login">
            <i className="fa-solid fa-user" /> Iniciar Sesión
          </Link>
          <Link to="/registro">
            <i className="fa-solid fa-user-plus" /> Registrarse
          </Link>
        </div>
      </nav>
    </header>
  );
}
