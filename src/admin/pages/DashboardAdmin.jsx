// Dashboard admin
// Página principal admin
export default function DashboardAdmin() {
  return (
    <section>
      <div className="admin-dashboard-header">
        <h2 className="admin-dashboard-title">Panel de administración</h2>
        <p className="admin-dashboard-desc">Gestiona tu tienda gaming desde este panel centralizado</p>
      </div>

      {/* Cards resumen/estadísticas */}
      <div className="admin-cards-row admin-cards-center">
        <div className="admin-card">
          <div className="admin-card-title">Productos</div>
          <div className="admin-card-value">15</div>
          <div className="admin-card-desc">Total en catálogo</div>
        </div>
        <div className="admin-card">
          <div className="admin-card-title">Usuarios</div>
          <div className="admin-card-value">8</div>
          <div className="admin-card-desc">Activos en la plataforma</div>
        </div>
        <div className="admin-card">
          <div className="admin-card-title">Órdenes</div>
          <div className="admin-card-value">3</div>
          <div className="admin-card-desc">Pendientes</div>
        </div>
        <div className="admin-card">
          <div className="admin-card-title">Ventas Mes</div>
          <div className="admin-card-value">$2.4M</div>
          <div className="admin-card-desc">CLP actual</div>
        </div>
      </div>
    </section>
  );
}
