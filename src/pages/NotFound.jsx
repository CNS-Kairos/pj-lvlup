// Página 404 - No encontrada

import "../styles/NotFound.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>Página no encontrada</p>
      <Link to="/" className="boton-volver">Volver al inicio</Link>
    </div>
  );
}
