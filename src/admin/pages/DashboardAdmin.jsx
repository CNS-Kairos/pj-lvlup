// Dashboard admin
// Página principal admin
export default function DashboardAdmin() {
  return (
    <section>
      {/* Mensaje bienvenida admin */}
      <div>
        <h2>Bienvenido al panel de administración de Level-Up Gamer</h2>
        <p>Gestiona tu tienda gaming desde este panel de control centralizado</p>
      </div>

      {/* Cards resumen/estadísticas */}
      <div>
        {/* Card productos */}
        <div>
          <div>
            {/* Icono gamepad */}
          </div>
          <div>
            <h3>Productos Registrados</h3>
            <span>15</span>
            <p>Total en catálogo</p>
          </div>
        </div>
        {/* Card usuarios */}
        <div>
          <div>
            {/* Icono user-group */}
          </div>
          <div>
            <h3>Usuarios Activos</h3>
            <span>8</span>
            <p>Registrados en la plataforma</p>
          </div>
        </div>
        {/* Card órdenes */}
        <div>
          <div>
            {/* Icono shopping-cart */}
          </div>
          <div>
            <h3>Órdenes Pendientes</h3>
            <span>3</span>
            <p>Esperando procesamiento</p>
          </div>
        </div>
        {/* Card ventas */}
        <div>
          <div>
            {/* Icono chart-bar */}
          </div>
          <div>
            <h3>Ventas del Mes</h3>
            <span>$2.4M</span>
            <p>CLP en el período actual</p>
          </div>
        </div>
      </div>

      {/* Acciones rápidas */}
      <div>
        <h3>Acciones Rápidas</h3>
        <div>
          <button>
            {/* Icono user-plus */}
            Agregar Usuario
          </button>
          <button>
            {/* Icono users-cog */}
            Gestionar Usuarios
          </button>
          <button>
            {/* Icono chart-line */}
            Ver Reportes
          </button>
        </div>
      </div>
    </section>
  );
}
