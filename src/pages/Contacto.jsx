// Página de Contacto
import { useState } from 'react';
import { useNotificacion } from '../context/NotificacionContext';

export default function Contacto() {
  const { mostrarNotificacion } = useNotificacion();
  // Estados para los campos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  // Estados para errores
  const [errors, setErrors] = useState({});

  // Función para manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Limpiar error al cambiar
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Función para validar el formulario
  const validateForm = () => {
    const newErrors = {};

    // Nombre: obligatorio, max 100
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
    } else if (formData.nombre.length > 100) {
      newErrors.nombre = 'El nombre no puede tener más de 100 caracteres';
    }

    // Email: obligatorio, max 100, dominios específicos
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio';
    } else if (formData.email.length > 100) {
      newErrors.email = 'El correo no puede tener más de 100 caracteres';
    } else if (!['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'].some(dominio => formData.email.endsWith(dominio))) {
      newErrors.email = 'Solo se permiten dominios @duoc.cl, @profesor.duoc.cl y @gmail.com';
    }

    // Asunto: obligatorio (como en HTML), max 100
    if (!formData.asunto.trim()) {
      newErrors.asunto = 'El asunto es obligatorio';
    } else if (formData.asunto.length > 100) {
      newErrors.asunto = 'El asunto no puede tener más de 100 caracteres';
    }

    // Mensaje: obligatorio, max 500
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El comentario es obligatorio';
    } else if (formData.mensaje.length > 500) {
      newErrors.mensaje = 'El comentario no puede tener más de 500 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Función para manejar el envío
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simular envío
      mostrarNotificacion('Mensaje enviado exitosamente. Te contactaremos pronto.');
      // Limpiar formulario
      setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
    }
  };

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

        <form className="formulario-contacto" onSubmit={handleSubmit}>
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
              value={formData.nombre}
              onChange={handleChange}
            />
            {errors.nombre && <div className="error">{errors.nombre}</div>}
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
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="error">{errors.email}</div>}
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
              value={formData.asunto}
              onChange={handleChange}
            />
            {errors.asunto && <div className="error">{errors.asunto}</div>}
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
              value={formData.mensaje}
              onChange={handleChange}
            ></textarea>
            {errors.mensaje && <div className="error">{errors.mensaje}</div>}
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
