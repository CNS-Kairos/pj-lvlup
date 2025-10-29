// Nuevo usuario admin
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUsuarios } from "../../context/UsuarioContext";
import { useNotificacion } from "../../context/NotificacionContext";
import { comunasPorRegion } from "../../data/comunas";
import { TIPOS_USUARIO } from "../../data/usuarios";

// Página para registrar un nuevo usuario
export default function NuevoUsuarioAdmin() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { crearUsuario, actualizarUsuario, usuarios } = useUsuarios();
  const { mostrarNotificacion } = useNotificacion();

  const [formData, setFormData] = useState({
    run: "",
    nombre: "",
    apellidos: "",
    correo: "",
    fechaNacimiento: "",
    rol: "",
    region: "",
    comuna: "",
    direccion: "",
  });

  const usuarioAEditar = usuarios.find((u) => u.id === parseInt(id));

  useEffect(() => {
    if (usuarioAEditar) {
      setFormData(usuarioAEditar);
    }
  }, [usuarioAEditar]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegionChange = (e) => {
    setFormData({ ...formData, region: e.target.value, comuna: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación simple de campos obligatorios
    if (
      !formData.run ||
      !formData.nombre ||
      !formData.apellidos ||
      !formData.correo ||
      !formData.rol ||
      !formData.region ||
      !formData.comuna ||
      !formData.direccion
    ) {
      mostrarNotificacion(
        "Todos los campos obligatorios deben ser completados",
        "error"
      );
      return;
    }

    if (id) {
      actualizarUsuario(parseInt(id), formData);
      mostrarNotificacion("Usuario actualizado con éxito", "exito");
    } else {
      crearUsuario(formData);
      mostrarNotificacion("Usuario creado con éxito", "exito");
    }
    navigate("/admin/usuarios");
  };
  return (
    <section>
      {/* Título sección */}
      <div>
        <h2>{id ? "Editar Usuario" : "Nuevo Usuario"}</h2>
        <p>
          {id
            ? "Modifique los datos del usuario"
            : "Complete el formulario para registrar un nuevo usuario en el sistema"}
        </p>
      </div>

      {/* Formulario nuevo usuario */}
      <form onSubmit={handleSubmit} noValidate>
        {/* Información personal */}
        <div>
          <h3>Información Personal</h3>
          <div>
            {/* RUN */}
            <div>
              <label>RUN *</label>
              <input
                type="text"
                name="run"
                value={formData.run}
                onChange={handleChange}
                placeholder="Ej: 12345678"
                maxLength={9}
                required
              />
              {/* Ayuda campo */}
              <div>Sin puntos ni guión. Entre 7 y 9 dígitos</div>
            </div>
            {/* Nombre */}
            <div>
              <label>Nombre *</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ingrese el nombre"
                maxLength={50}
                required
              />
            </div>
            {/* Apellidos */}
            <div>
              <label>Apellidos *</label>
              <input
                type="text"
                name="apellidos"
                value={formData.apellidos}
                onChange={handleChange}
                placeholder="Ingrese los apellidos"
                maxLength={100}
                required
              />
            </div>
            {/* Email */}
            <div>
              <label>Correo Electrónico *</label>
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                placeholder="usuario@duoc.cl"
                maxLength={100}
                required
              />
              <div>
                Solo se permiten: @duoc.cl, @profesor.duoc.cl, @gmail.com
              </div>
            </div>
            {/* Fecha nacimiento */}
            <div>
              <label>Fecha de Nacimiento</label>
              <input
                type="date"
                name="fechaNacimiento"
                value={formData.fechaNacimiento}
                onChange={handleChange}
              />
              <div>Campo opcional</div>
            </div>
          </div>
        </div>

        {/* Información del sistema */}
        <div>
          <h3>Información del Sistema</h3>
          <div>
            <div>
              <label>Tipo de Usuario *</label>
              <select
                name="rol"
                value={formData.rol}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione un tipo</option>
                {TIPOS_USUARIO.map((tipo) => (
                  <option key={tipo} value={tipo}>
                    {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Ubicación */}
        <div>
          <h3>Ubicación</h3>
          <div>
            {/* Región */}
            <div>
              <label>Región *</label>
              <select
                name="region"
                value={formData.region}
                onChange={handleRegionChange}
                required
              >
                <option value="">Seleccione una región</option>
                <option value="arica">Arica y Parinacota</option>
                <option value="tarapaca">Tarapacá</option>
                <option value="antofagasta">Antofagasta</option>
                <option value="atacama">Atacama</option>
                <option value="coquimbo">Coquimbo</option>
                <option value="valparaiso">Valparaíso</option>
                <option value="metropolitana">Metropolitana de Santiago</option>
                <option value="ohiggins">
                  Libertador General Bernardo O'Higgins
                </option>
                <option value="maule">Maule</option>
                <option value="nuble">Ñuble</option>
                <option value="biobio">Biobío</option>
                <option value="araucania">La Araucanía</option>
                <option value="rios">Los Ríos</option>
                <option value="lagos">Los Lagos</option>
                <option value="aysen">
                  Aysén del General Carlos Ibáñez del Campo
                </option>
                <option value="magallanes">
                  Magallanes y de la Antártica Chilena
                </option>
              </select>
            </div>
            {/* Comuna */}
            <div>
              <label>Comuna *</label>
              <select
                name="comuna"
                value={formData.comuna}
                onChange={handleChange}
                required
                disabled={!formData.region}
              >
                <option value="">
                  {formData.region
                    ? "Seleccione una comuna"
                    : "Primero seleccione una región"}
                </option>
                {formData.region &&
                  comunasPorRegion[formData.region]?.map((comuna) => (
                    <option key={comuna} value={comuna.toLowerCase()}>
                      {comuna}
                    </option>
                  ))}
              </select>
            </div>
            {/* Dirección */}
            <div>
              <label>Dirección *</label>
              <textarea
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                placeholder="Ingrese la dirección completa"
                maxLength={300}
                rows={3}
                required
              />
              <div>Máximo 300 caracteres</div>
            </div>
          </div>
        </div>

        {/* Botones acción */}
        <div>
          <button type="submit">Guardar Usuario</button>
          <button type="button" onClick={() => navigate(-1)}>
            Cancelar
          </button>
        </div>
      </form>
    </section>
  );
}
