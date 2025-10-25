// Layout principal para el admin
// AdminLayout para envolver las páginas del admin
import { Outlet, Link } from "react-router-dom";
import "../../styles/AdminLayout.css";

export default function AdminLayout() {
  return (
    <div className="admin-layout">
      {/* Barra lateral admin */}
      <aside className="admin-sidebar">
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
      </aside>
      {/* Contenido principal admin */}
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}
