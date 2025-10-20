import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <footer>
        <p>&copy; 2025 Level-Up Gamer. Todos los derechos reservados.</p>
        <p>Síguenos en nuestras redes sociales:</p>
        <div>
          {/* Asegúrate de que los <i> que usan font-awesome tengan una barra / al final si no tienen contenido dentro */}
          <a href="#">
            <i className="fa-brands fa-facebook" />
          </a>
          <a href="#">
            <i className="fa-brands fa-x-twitter" />
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram" />
          </a>
        </div>
      </footer>
    </div>
  );
}
