// Nuevo usuario admin
// Página para registrar un nuevo usuario
export default function NuevoUsuarioAdmin() {
  return (
    <section>
      {/* Título sección */}
      <div>
        <h2>Nuevo Usuario</h2>
        <p>Complete el formulario para registrar un nuevo usuario en el sistema</p>
      </div>

      {/* Formulario nuevo usuario */}
      <form noValidate>
        {/* Información personal */}
        <div>
          <h3>Información Personal</h3>
          <div>
            {/* RUN */}
            <div>
              <label>RUN *</label>
              <input type="text" placeholder="Ej: 12345678" maxLength={9} required />
              {/* Ayuda campo */}
              <div>Sin puntos ni guión. Entre 7 y 9 dígitos</div>
            </div>
            {/* Nombre */}
            <div>
              <label>Nombre *</label>
              <input type="text" placeholder="Ingrese el nombre" maxLength={50} required />
            </div>
            {/* Apellidos */}
            <div>
              <label>Apellidos *</label>
              <input type="text" placeholder="Ingrese los apellidos" maxLength={100} required />
            </div>
            {/* Email */}
            <div>
              <label>Correo Electrónico *</label>
              <input type="email" placeholder="usuario@duoc.cl" maxLength={100} required />
              <div>Solo se permiten: @duoc.cl, @profesor.duoc.cl, @gmail.com</div>
            </div>
            {/* Fecha nacimiento */}
            <div>
              <label>Fecha de Nacimiento</label>
              <input type="date" />
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
              <select required>
                <option value="">Seleccione un tipo</option>
                <option value="administrador">Administrador</option>
                <option value="cliente">Cliente</option>
                <option value="vendedor">Vendedor</option>
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
              <select required>
                <option value="">Seleccione una región</option>
                {/* Opciones dinámicas */}
              </select>
            </div>
            {/* Comuna */}
            <div>
              <label>Comuna *</label>
              <select required disabled>
                <option value="">Primero seleccione una región</option>
                {/* Opciones dinámicas */}
              </select>
            </div>
            {/* Dirección */}
            <div>
              <label>Dirección *</label>
              <textarea placeholder="Ingrese la dirección completa" maxLength={300} rows={3} required />
              <div>Máximo 300 caracteres</div>
            </div>
          </div>
        </div>

        {/* Botones acción */}
        <div>
          <button type="submit">Guardar Usuario</button>
          <button type="button">Cancelar</button>
        </div>
      </form>
    </section>
  );
}
