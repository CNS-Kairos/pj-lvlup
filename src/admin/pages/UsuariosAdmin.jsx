// Usuarios admin
import { useState } from "react";
import { useUsuarios } from "../../context/UsuarioContext";
import { useNotificacion } from "../../context/NotificacionContext";
import { useNavigate, Link } from "react-router-dom";

// Página usuarios admin
export default function UsuariosAdmin() {
  const { usuarios, eliminarUsuario } = useUsuarios();
  const { mostrarNotificacion } = useNotificacion();
  const navigate = useNavigate();

  const [busqueda, setBusqueda] = useState("");
  const [tipoFiltro, setTipoFiltro] = useState("");

  const handleEliminar = (id, nombre) => {
    if (window.confirm(`¿Estás seguro de eliminar al usuario ${nombre}?`)) {
      eliminarUsuario(id);
      mostrarNotificacion("Usuario eliminado con éxito", "exito");
    }
  };

  const usuariosFiltrados = usuarios.filter((usuario) => {
    const coincideBusqueda =
      usuario.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      usuario.apellidos.toLowerCase().includes(busqueda.toLowerCase()) ||
      usuario.correo.toLowerCase().includes(busqueda.toLowerCase());
    const coincideFiltro = tipoFiltro === "" || usuario.rol === tipoFiltro;
    return coincideBusqueda && coincideFiltro;
  });
  return (
    <section>
      {/* Título sección */}
      <div>
        <h2>Gestión de Usuarios</h2>
        <p>Aquí puedes ver y administrar todos los usuarios registrados</p>
      </div>

      {/* Controles superiores */}
      <div>
        <button onClick={() => navigate("nuevo")}>
          {/* Icono user-plus */}
          Nuevo Usuario
        </button>
        <div>
          <input
            type="text"
            placeholder="Buscar usuario..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          {/* Icono search */}
        </div>
        <select
          value={tipoFiltro}
          onChange={(e) => setTipoFiltro(e.target.value)}
        >
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
            {usuariosFiltrados.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.run}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.apellidos}</td>
                <td>{usuario.correo}</td>
                <td>{usuario.rol}</td>
                <td>{usuario.estado}</td>
                <td>
                  <Link to={`editar/${usuario.id}`}>Editar</Link>
                  <button
                    onClick={() => handleEliminar(usuario.id, usuario.nombre)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      <div>
        <p>
          Mostrando {usuariosFiltrados.length} de {usuarios.length} usuarios
          totales
        </p>
        <div>
          <button disabled>← Anterior</button>
          <span>Página 1 de 1</span>
          <button disabled>Siguiente →</button>
        </div>
      </div>
    </section>
  );
}
