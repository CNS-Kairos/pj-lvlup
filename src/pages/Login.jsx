// Página de Login
export default function Login() {
  return (
    <div>
      {/* Sección principal del formulario de login */}
      <section className="seccion-formulario">
        <h2>Iniciar Sesión</h2>
        <form id="formularioLogin">
          {/* Campo de Correo Electrónico */}
          <div className="campo-formulario">
            <label htmlFor="usuario">Correo Electrónico:</label>
            <input
              type="email"
              id="usuario"
              name="usuario"
              placeholder="admin@levelup.cl"
              required
              className="form-control-dark"
            />
          </div>
          {/* Campo de Contraseña */}
          <div className="campo-formulario">
            <label htmlFor="contraseña">Contraseña:</label>
            <input
              type="password"
              id="contraseña"
              name="contraseña"
              placeholder="admin123"
              required
              className="form-control-dark"
            />
          </div>
          {/* Botón de envío */}
          <button type="submit" className="boton-enviar">
            Iniciar Sesión
          </button>
          {/* Enlace a registro */}
          <p className="enlace-registro">
            ¿Aún no tienes una cuenta? <a href="/registro">Regístrate aquí</a>
          </p>
        </form>
      </section>
    </div>
  );
}
