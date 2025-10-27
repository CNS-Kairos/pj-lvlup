// AdminLayout para admin
// Estructura base del panel admin
import { Outlet } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";
import AdminFooter from "../../components/AdminFooter";
import "../../styles/AdminLayout.css";

export default function AdminLayout() {
  return (
    <div className="admin-layout">
      {/* Sidebar admin */}
      <AdminSidebar />
      {/* Contenido admin */}
      <main className="admin-main">
        <Outlet />
      </main>
      <AdminFooter />
    </div>
  );
}
