// Página de Registro
export default function Registro() {
  return (
    <div>
      {/* Sección principal del formulario de registro */}
      <section className="seccion-formulario">
        <h2>Crear Cuenta</h2>
        <form id="formularioRegistro" className="formulario-registro">
          {/* Campo: Nombre */}
          <div className="campo-formulario">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required maxLength={50} className="form-control-dark" />
          </div>
          {/* Campo: Apellidos */}
          <div className="campo-formulario">
            <label htmlFor="apellidos">Apellidos:</label>
            <input type="text" id="apellidos" name="apellidos" placeholder="Tus apellidos" required maxLength={100} className="form-control-dark" />
          </div>
          {/* Campo: Correo Electrónico */}
          <div className="campo-formulario">
            <label htmlFor="correo">Correo Electrónico:</label>
            <input type="email" id="correo" name="correo" placeholder="tu@email.com" required maxLength={100} className="form-control-dark" />
          </div>
          {/* Campo: RUT */}
          <div className="campo-formulario">
            <label htmlFor="rut">RUT:</label>
            <input type="text" id="rut" name="rut" placeholder="19011022K" required maxLength={9} className="form-control-dark" />
          </div>
          {/* Campo: Teléfono */}
          <div className="campo-formulario">
            <label htmlFor="telefono">Teléfono:</label>
            <input type="tel" id="telefono" name="telefono" placeholder="912345678" required maxLength={9} className="form-control-dark" />
          </div>
          {/* Campo: Región */}
          <div className="campo-formulario">
            <label htmlFor="region">Región:</label>
            <select id="region" name="region" required className="form-select-dark">
              <option value="">Selecciona una región</option>
              <option value="arica">Arica y Parinacota</option>
              <option value="tarapaca">Tarapacá</option>
              <option value="antofagasta">Antofagasta</option>
              <option value="atacama">Atacama</option>
              <option value="coquimbo">Coquimbo</option>
              <option value="valparaiso">Valparaíso</option>
              <option value="metropolitana">Región Metropolitana</option>
              <option value="ohiggins">O'Higgins</option>
              <option value="maule">Maule</option>
              <option value="nuble">Ñuble</option>
              <option value="biobio">Biobío</option>
              <option value="araucania">La Araucanía</option>
              <option value="rios">Los Ríos</option>
              <option value="lagos">Los Lagos</option>
              <option value="aysen">Aysén</option>
              <option value="magallanes">Magallanes</option>
            </select>
          </div>
          {/* Campo: Comuna */}
          <div className="campo-formulario">
            <label htmlFor="comuna">Comuna:</label>
            <select id="comuna" name="comuna" required disabled className="form-select-dark">
              <option value="">Primero selecciona una región</option>
            </select>
          </div>
          {/* Campo: Dirección */}
          <div className="campo-formulario">
            <label htmlFor="direccion">Dirección:</label>
            <input type="text" id="direccion" name="direccion" placeholder="Tu dirección completa" required maxLength={300} className="form-control-dark" />
          </div>
          {/* Campo: Contraseña */}
          <div className="campo-formulario">
            <label htmlFor="contraseña">Contraseña:</label>
            <input type="password" id="contraseña" name="contraseña" placeholder="8-15 caracteres, mayúscula, minúscula, número y especial" required minLength={8} maxLength={15} className="form-control-dark" />
          </div>
          {/* Campo: Confirmar Contraseña */}
          <div className="campo-formulario">
            <label htmlFor="confirmarContraseña">Confirmar Contraseña:</label>
            <input type="password" id="confirmarContraseña" name="confirmarContraseña" placeholder="Repite tu contraseña" required minLength={8} maxLength={15} className="form-control-dark" />
          </div>
          {/* Botón de envío */}
          <button type="submit" className="boton-enviar">Registrarse</button>
          {/* Enlace a login */}
          <p className="enlace-registro">¿Ya tienes una cuenta? <a href="/login">Inicia sesión aquí</a></p>
        </form>
      </section>
    </div>
  );
}
