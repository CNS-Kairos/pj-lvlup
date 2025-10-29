// ====================================
// Navbar - Barra de navegación principal
// ====================================

import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/img/logo-lvl-up.png";
import ContadorCarrito from "./ContadorCarrito";

export default function Navbar() {
  const { usuario, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

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
            <Link to="/blogs">Blogs</Link>
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
            <ContadorCarrito />
          </Link>
          {usuario ? (
            <>
              <span className="usuario-info">
                <i className="fa-solid fa-user" /> Bienvenido {usuario.email}
              </span>
              <button onClick={handleLogout} className="btn-logout">
                <i className="fa-solid fa-sign-out-alt" /> Cerrar Sesión
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <i className="fa-solid fa-user" /> Iniciar Sesión
              </Link>
              <Link to="/registro">
                <i className="fa-solid fa-user-plus" /> Registrarse
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
