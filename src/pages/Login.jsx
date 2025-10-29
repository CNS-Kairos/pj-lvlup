// Página de Login
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useNotificacion } from '../context/NotificacionContext';

export default function Login() {
  const { login } = useAuth();
  const { mostrarNotificacion } = useNotificacion();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const usuario = await login(email, password);
    if (usuario) {
      mostrarNotificacion(`¡Bienvenido ${usuario.email}!`, 'exito');
      if (usuario.rol === 'admin') navigate('/admin');
      else navigate('/');
    }
    // Si falla, el AuthContext ya muestra la notificación.
  };

  return (
    <div>
      {/* Sección principal del formulario de login */}
      <section className="seccion-formulario">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* Botón de envío */}
          <button type="submit" className="boton-enviar">
            Iniciar Sesión
          </button>
          {/* Enlace a registro */}
          <p className="enlace-registro">
            ¿Aún no tienes una cuenta? <Link to="/registro">Regístrate aquí</Link>
          </p>
        </form>
      </section>
    </div>
  );
}
