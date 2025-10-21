// Página de Contacto
export default function Contacto() {
  return (
    <div>
      {/* Banner */}
      <section className="banner-contacto">
        <h1>Contáctanos</h1>
      </section>

      {/* Sección para introducir la página de contacto */}
      <section className="seccion-contacto">
        <p>
          ¿Tienes alguna pregunta, sugerencia o necesitas soporte? ¡No dudes en
          contactarnos! Completa el siguiente formulario y te responderemos a la
          brevedad posible.
        </p>

        <form className="formulario-contacto">
          {/* Campo "Nombre" */}
          <div className="campo-formulario">
            <label htmlFor="nombre">Nombre completo:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="form-control-dark"
              required
              placeholder="Máximo 100 caracteres"
            />
          </div>

          {/* Campo "Email" */}
          <div className="campo-formulario">
            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control-dark"
              required
              placeholder="usuario@duoc.cl (máximo 100 caracteres)"
            />
          </div>

          {/* Campo "Asunto" */}
          <div className="campo-formulario">
            <label htmlFor="asunto">Asunto:</label>
            <input
              type="text"
              id="asunto"
              name="asunto"
              className="form-control-dark"
              required
              placeholder="Máximo 100 caracteres"
            />
          </div>

          {/* Campo "Mensaje" */}
          <div className="campo-formulario">
            <label htmlFor="mensaje">Tu comentario:</label>
            <textarea
              id="mensaje"
              name="mensaje"
              className="form-control-dark"
              rows="6"
              required
              placeholder="Escribe tu comentario aquí (máximo 500 caracteres)"
            ></textarea>
          </div>

          {/* Botón para enviar */}
          <button type="submit" className="boton-enviar">
            Enviar Mensaje
          </button>
        </form>
      </section>
    </div>
  );
}
