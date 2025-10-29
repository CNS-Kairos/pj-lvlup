// Sidebar exclusivo para admin
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminSidebar() {
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

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
            <Link to="/admin/productos/nuevo">Nuevo Producto</Link>
          </li>
          <li>
            <Link to="/admin/usuarios">Usuarios</Link>
          </li>
          <li>
            <Link to="/admin/usuarios/nuevo">Nuevo Usuario</Link>
          </li>
        </ul>
      </nav>

      {/* Información del usuario y logout */}
      <div className="admin-sidebar-user">
        <div className="admin-sidebar-user-info">
          <div className="admin-sidebar-user-email">{usuario?.email}</div>
          <button className="admin-sidebar-logout-btn" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      </div>
    </aside>
  );
}
