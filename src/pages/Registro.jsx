

// Página de Registro
import { useState } from 'react';
import { useNotificacion } from '../context/NotificacionContext';
import { comunasPorRegion } from '../data/comunas';

export default function Registro() {
  const { mostrarNotificacion } = useNotificacion();

  // Estados para los campos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    rut: '',
    telefono: '',
    region: '',
    comuna: '',
    direccion: '',
    contraseña: '',
    confirmarContraseña: ''
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

  // Función para manejar cambio de región
  const handleRegionChange = (e) => {
    const region = e.target.value;
    setFormData(prev => ({ ...prev, region, comuna: '' })); // Reset comuna
    if (errors.region) {
      setErrors(prev => ({ ...prev, region: '' }));
    }
  };

  // Función para validar el formulario
  const validateForm = () => {
    const newErrors = {};

    // Nombre: obligatorio, max 50
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    } else if (formData.nombre.length > 50) {
      newErrors.nombre = 'El nombre no puede tener más de 50 caracteres';
    }

    // Apellidos: obligatorio, max 100
    if (!formData.apellidos.trim()) {
      newErrors.apellidos = 'Los apellidos son requeridos';
    } else if (formData.apellidos.length > 100) {
      newErrors.apellidos = 'Los apellidos no pueden tener más de 100 caracteres';
    }

    // Correo: obligatorio, max 100, dominios específicos
    if (!formData.correo.trim()) {
      newErrors.correo = 'El correo es requerido';
    } else if (formData.correo.length > 100) {
      newErrors.correo = 'El correo no puede tener más de 100 caracteres';
    } else if (!['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'].some(dominio => formData.correo.endsWith(dominio))) {
      newErrors.correo = 'Solo se permiten dominios @duoc.cl, @profesor.duoc.cl y @gmail.com';
    }

    // RUT: obligatorio, formato válido
    if (!formData.rut.trim()) {
      newErrors.rut = 'El RUT es requerido';
    } else if (!validarRUTFormato(formData.rut)) {
      newErrors.rut = 'El RUT debe tener formato válido (ej: 19011022K)';
    }

    // Teléfono: obligatorio, 9 dígitos chilenos
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido';
    } else if (!/^[0-9]{9}$/.test(formData.telefono)) {
      newErrors.telefono = 'El teléfono debe tener exactamente 9 dígitos numéricos';
    }

    // Región: obligatorio
    if (!formData.region) {
      newErrors.region = 'La región es requerida';
    }

    // Comuna: obligatorio
    if (!formData.comuna) {
      newErrors.comuna = 'La comuna es requerida';
    }

    // Dirección: obligatorio, max 300
    if (!formData.direccion.trim()) {
      newErrors.direccion = 'La dirección es requerida';
    } else if (formData.direccion.length > 300) {
      newErrors.direccion = 'La dirección no puede tener más de 300 caracteres';
    }

    // Contraseña: obligatorio, fuerte
    if (!formData.contraseña) {
      newErrors.contraseña = 'La contraseña es requerida';
    } else if (!validarContraseñaFuerte(formData.contraseña)) {
      newErrors.contraseña = 'La contraseña debe tener entre 8-15 caracteres, incluir mayúscula, minúscula, número y carácter especial';
    }

    // Confirmar contraseña: obligatorio, coincida
    if (!formData.confirmarContraseña) {
      newErrors.confirmarContraseña = 'La confirmación de contraseña es requerida';
    } else if (formData.contraseña !== formData.confirmarContraseña) {
      newErrors.confirmarContraseña = 'Las contraseñas no coinciden';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Función para validar RUT formato
  const validarRUTFormato = (rut) => {
    const rutLimpio = rut.replace(/[.-]/g, '');
    if (!/^[0-9]{7,8}[0-9kK]$/.test(rutLimpio)) {
      return false;
    }
    if (rutLimpio.length < 7 || rutLimpio.length > 9) {
      return false;
    }
    return true;
  };

  // Función para validar contraseña fuerte
  const validarContraseñaFuerte = (contraseña) => {
    if (contraseña.length < 8 || contraseña.length > 15) {
      return false;
    }
    if (!/[A-Z]/.test(contraseña)) {
      return false;
    }
    if (!/[a-z]/.test(contraseña)) {
      return false;
    }
    if (!/[0-9]/.test(contraseña)) {
      return false;
    }
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(contraseña)) {
      return false;
    }
    return true;
  };

  // Función para manejar el envío
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simular registro exitoso
      mostrarNotificacion('Registro exitoso. ¡Bienvenido a Level-Up Gamer!');
      // Limpiar formulario
      setFormData({
        nombre: '',
        apellidos: '',
        correo: '',
        rut: '',
        telefono: '',
        region: '',
        comuna: '',
        direccion: '',
        contraseña: '',
        confirmarContraseña: ''
      });
    }
  };
  return (
    <div>
      {/* Sección principal del formulario de registro */}
      <section className="seccion-formulario">
        <h2>Crear Cuenta</h2>
        <form id="formularioRegistro" className="formulario-registro" onSubmit={handleSubmit}>
          {/* Campo: Nombre */}
          <div className="campo-formulario">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu nombre"
              required
              maxLength={50}
              className="form-control-dark"
              value={formData.nombre}
              onChange={handleChange}
            />
            {errors.nombre && <div className="error">{errors.nombre}</div>}
          </div>
          {/* Campo: Apellidos */}
          <div className="campo-formulario">
            <label htmlFor="apellidos">Apellidos:</label>
            <input
              type="text"
              id="apellidos"
              name="apellidos"
              placeholder="Tus apellidos"
              required
              maxLength={100}
              className="form-control-dark"
              value={formData.apellidos}
              onChange={handleChange}
            />
            {errors.apellidos && <div className="error">{errors.apellidos}</div>}
          </div>
          {/* Campo: Correo Electrónico */}
          <div className="campo-formulario">
            <label htmlFor="correo">Correo Electrónico:</label>
            <input
              type="email"
              id="correo"
              name="correo"
              placeholder="tu@email.com"
              required
              maxLength={100}
              className="form-control-dark"
              value={formData.correo}
              onChange={handleChange}
            />
            {errors.correo && <div className="error">{errors.correo}</div>}
          </div>
          {/* Campo: RUT */}
          <div className="campo-formulario">
            <label htmlFor="rut">RUT:</label>
            <input
              type="text"
              id="rut"
              name="rut"
              placeholder="19011022K"
              required
              maxLength={9}
              className="form-control-dark"
              value={formData.rut}
              onChange={handleChange}
            />
            {errors.rut && <div className="error">{errors.rut}</div>}
          </div>
          {/* Campo: Teléfono */}
          <div className="campo-formulario">
            <label htmlFor="telefono">Teléfono:</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              placeholder="912345678"
              required
              maxLength={9}
              className="form-control-dark"
              value={formData.telefono}
              onChange={handleChange}
            />
            {errors.telefono && <div className="error">{errors.telefono}</div>}
          </div>
          {/* Campo: Región */}
          <div className="campo-formulario">
            <label htmlFor="region">Región:</label>
            <select
              id="region"
              name="region"
              required
              className="form-select-dark"
              value={formData.region}
              onChange={handleRegionChange}
            >
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
            {errors.region && <div className="error">{errors.region}</div>}
          </div>
          {/* Campo: Comuna */}
          <div className="campo-formulario">
            <label htmlFor="comuna">Comuna:</label>
            <select
              id="comuna"
              name="comuna"
              required
              disabled={!formData.region}
              className="form-select-dark"
              value={formData.comuna}
              onChange={handleChange}
            >
              <option value="">{formData.region ? 'Selecciona una comuna' : 'Primero selecciona una región'}</option>
              {formData.region && comunasPorRegion[formData.region]?.map(comuna => (
                <option key={comuna} value={comuna}>{comuna}</option>
              ))}
            </select>
            {errors.comuna && <div className="error">{errors.comuna}</div>}
          </div>
          {/* Campo: Dirección */}
          <div className="campo-formulario">
            <label htmlFor="direccion">Dirección:</label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              placeholder="Tu dirección completa"
              required
              maxLength={300}
              className="form-control-dark"
              value={formData.direccion}
              onChange={handleChange}
            />
            {errors.direccion && <div className="error">{errors.direccion}</div>}
          </div>
          {/* Campo: Contraseña */}
          <div className="campo-formulario">
            <label htmlFor="contraseña">Contraseña:</label>
            <input
              type="password"
              id="contraseña"
              name="contraseña"
              placeholder="8-15 caracteres, mayúscula, minúscula, número y especial"
              required
              minLength={8}
              maxLength={15}
              className="form-control-dark"
              value={formData.contraseña}
              onChange={handleChange}
            />
            {errors.contraseña && <div className="error">{errors.contraseña}</div>}
          </div>
          {/* Campo: Confirmar Contraseña */}
          <div className="campo-formulario">
            <label htmlFor="confirmarContraseña">Confirmar Contraseña:</label>
            <input
              type="password"
              id="confirmarContraseña"
              name="confirmarContraseña"
              placeholder="Repite tu contraseña"
              required
              minLength={8}
              maxLength={15}
              className="form-control-dark"
              value={formData.confirmarContraseña}
              onChange={handleChange}
            />
            {errors.confirmarContraseña && <div className="error">{errors.confirmarContraseña}</div>}
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
