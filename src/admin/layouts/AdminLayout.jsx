// AdminLayout para admin
// Estructura base del panel admin
import { Outlet, Link } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div>
      {/* Sidebar admin */}
      <nav>
        <ul>
          <li>
            {/* Dashboard admin */}
            <Link to="/admin">Dashboard admin</Link>
          </li>
          <li>
            {/* Productos admin */}
            <Link to="/admin/productos">Productos admin</Link>
          </li>
          <li>
            {/* Usuarios admin */}
            <Link to="/admin/usuarios">Usuarios admin</Link>
          </li>
        </ul>
      </nav>
      {/* Contenido admin */}
      <div>
        <Outlet />
      </div>
    </div>
  );
}
