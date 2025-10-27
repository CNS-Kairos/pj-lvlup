// Sidebar exclusivo para admin
import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-title">Admin</div>
      <nav className="admin-sidebar-nav">
        <ul>
          <li>
            <Link to="/admin">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/productos">Productos</Link>
          </li>
          <li>
            <Link to="/admin/usuarios">Usuarios</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
