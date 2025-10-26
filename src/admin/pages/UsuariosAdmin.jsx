// Usuarios admin
// Página usuarios admin
export default function UsuariosAdmin() {
  return (
    <section>
      {/* Título sección */}
      <div>
        <h2>Gestión de Usuarios</h2>
        <p>Aquí puedes ver y administrar todos los usuarios registrados</p>
      </div>

      {/* Controles superiores */}
      <div>
        <button>
          {/* Icono user-plus */}
          Nuevo Usuario
        </button>
        <div>
          <input type="text" placeholder="Buscar usuario..." />
          {/* Icono search */}
        </div>
        <select>
          <option value="">Todos los tipos</option>
          <option value="administrador">Administradores</option>
          <option value="cliente">Clientes</option>
          <option value="vendedor">Vendedores</option>
        </select>
      </div>

      {/* Tabla usuarios */}
      <div>
        <table>
          <thead>
            <tr>
              <th>RUN</th>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Email</th>
              <th>Tipo</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Ejemplo de usuarios, solo estructura */}
            <tr>
              <td>12.345.678-9</td>
              <td>Carlos</td>
              <td>González Pérez</td>
              <td>carlos.gonzalez@levelupgamer.com</td>
              <td>Administrador</td>
              <td>Activo</td>
              <td>
                <button title="Editar">Editar</button>
                <button title="Ver detalles">Ver</button>
                <button title="Eliminar">Eliminar</button>
              </td>
            </tr>
            {/* ...otros usuarios de ejemplo... */}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      <div>
        <p>Mostrando 5 de 247 usuarios totales</p>
        <div>
          <button disabled>← Anterior</button>
          <span>Página 1 de 50</span>
          <button>Siguiente →</button>
        </div>
      </div>
    </section>
  );
}
