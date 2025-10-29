// Nuevo producto admin
import { useState, useEffect } from 'react';
import { useProductos } from '../../context/ProductoContext';
import { useNotificacion } from '../../context/NotificacionContext';
import { useNavigate, useParams } from 'react-router-dom';

// Página para registrar un nuevo producto
export default function NuevoProductoAdmin() {
  const { crearProducto, actualizarProducto, productos } = useProductos();
  const { mostrarNotificacion } = useNotificacion();
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    precio: 0,
    categoria: '',
    stock: 0,
    imagen: ''
  });

  const productoAEditar = productos.find(p => p.id === parseInt(id));

  useEffect(() => {
    if (productoAEditar) {
      setFormData(productoAEditar);
    }
  }, [productoAEditar]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // (Validación simple... podríamos agregar más)
    if (Object.values(formData).some(val => val === '')) {
      mostrarNotificacion('Todos los campos son obligatorios', 'error');
      return;
    }
    
    if (id) {
      actualizarProducto(parseInt(id), formData);
      mostrarNotificacion('Producto actualizado con éxito', 'exito');
    } else {
      crearProducto(formData);
      mostrarNotificacion('Producto creado con éxito', 'exito');
    }
    navigate('/admin/productos');
  };
  return (
    <section>
      {/* Título sección */}
      <div>
        <h2>{id ? 'Editar Producto' : 'Nuevo Producto'}</h2>
        <p>{id ? 'Modifique los datos del producto' : 'Complete el formulario para registrar un nuevo producto en el catálogo'}</p>
      </div>

      {/* Formulario nuevo producto */}
      <form onSubmit={handleSubmit}>
        {/* Información básica */}
        <div>
          <h3>Información Básica</h3>
          <div>
            {/* Nombre */}
            <div>
              <label>Nombre del Producto *</label>
              <input 
                type="text" 
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ingrese el nombre del producto" 
                maxLength={100} 
                required 
              />
            </div>
            {/* Descripción */}
            <div>
              <label>Descripción *</label>
              <textarea 
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                placeholder="Ingrese la descripción del producto" 
                maxLength={500} 
                rows={4} 
                required 
              />
              <div>Máximo 500 caracteres</div>
            </div>
            {/* Precio */}
            <div>
              <label>Precio *</label>
              <input 
                type="number" 
                name="precio"
                value={formData.precio}
                onChange={handleChange}
                placeholder="0" 
                min={0} 
                step={0.01} 
                required 
              />
              <div>En CLP, sin puntos ni comas</div>
            </div>
            {/* Categoría */}
            <div>
              <label>Categoría *</label>
              <select 
                name="categoria"
                value={formData.categoria}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione una categoría</option>
                <option value="consolas">Consolas</option>
                <option value="juegos">Juegos</option>
                <option value="accesorios">Accesorios</option>
                <option value="otros">Otros</option>
              </select>
            </div>
            {/* Stock */}
            <div>
              <label>Stock Inicial *</label>
              <input 
                type="number" 
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                placeholder="0" 
                min={0} 
                required 
              />
              <div>Cantidad disponible</div>
            </div>
          </div>
        </div>

        {/* Imagen */}
        <div>
          <h3>Imagen del Producto</h3>
          <div>
            <div>
              <label>URL de la Imagen *</label>
              <input 
                type="url" 
                name="imagen"
                value={formData.imagen}
                onChange={handleChange}
                placeholder="https://ejemplo.com/imagen.jpg" 
                required 
              />
              <div>Debe ser una URL válida de imagen</div>
            </div>
          </div>
        </div>

        {/* Botones acción */}
        <div>
          <button type="submit">Guardar Producto</button>
          <button type="button" onClick={() => navigate(-1)}>Cancelar</button>
        </div>
      </form>
    </section>
  );
}