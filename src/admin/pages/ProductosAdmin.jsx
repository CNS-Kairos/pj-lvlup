// Productos admin
import { useProductos } from '../../context/ProductoContext';
import { useNotificacion } from '../../context/NotificacionContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Página productos admin
export default function ProductosAdmin() {
  const { productos, eliminarProducto } = useProductos();
  const { mostrarNotificacion } = useNotificacion();
  const navigate = useNavigate();

  const handleEliminar = (id, nombre) => {
    if (window.confirm(`¿Estás seguro de eliminar "${nombre}"?`)) {
      eliminarProducto(id);
      mostrarNotificacion(`Producto "${nombre}" eliminado correctamente`, 'exito');
    }
  };

  const handleAgregarProducto = () => {
    navigate('nuevo');
  };
  return (
    <section>
      <h2>Gestión de Productos</h2>
      <p>Inventario actual de la tienda</p>

      {/* Botón agregar producto */}
      <div>
        <button onClick={handleAgregarProducto}>
          {/* Icono plus */}
          Agregar Producto
        </button>
      </div>

      {/* Tabla de productos */}
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Categoría</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map(producto => (
              <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>${producto.precio.toLocaleString('es-CL')}</td>
                <td>{producto.stock}</td>
                <td>{producto.categoria}</td>
                <td>
                  <Link to={`editar/${producto.id}`}>Editar</Link>
                  <button 
                    onClick={() => handleEliminar(producto.id, producto.nombre)}
                    className="btn-eliminar"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
