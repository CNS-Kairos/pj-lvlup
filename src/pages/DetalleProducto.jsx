import { useParams, Link } from 'react-router-dom';
import { productos } from '../data/productos';
import { useCarrito } from '../hooks/useCarrito';
import { useNotificacion } from '../context/NotificacionContext';

export default function DetalleProducto() {
  const { id } = useParams();
  const { agregarAlCarrito } = useCarrito();
  const { mostrarNotificacion } = useNotificacion();

  // Buscar el producto por ID
  const producto = productos.find(p => p.id === parseInt(id));

  // Si no se encuentra el producto
  if (!producto) {
    return (
      <div>
        <section className="seccion-detalle-producto">
          <h2>Producto no encontrado</h2>
          <p>El producto que buscas no existe.</p>
          <Link to="/productos" className="boton-comprar">Volver a Productos</Link>
        </section>
      </div>
    );
  }

  // Función para agregar al carrito
  const handleAgregarAlCarrito = () => {
    agregarAlCarrito(producto);
    mostrarNotificacion(`¡${producto.nombre} agregado al carrito!`);
  };

  return (
    <div>
      {/* Sección principal del detalle de producto */}
      <section className="seccion-detalle-producto">
        {/* Imagen del producto */}
        <div className="detalle-imagen">
          <img src={producto.imagen} alt={`Imagen de ${producto.nombre}`} />
        </div>

        {/* Información del producto */}
        <div className="detalle-info">
          <h2>{producto.nombre}</h2>
          <p className="detalle-descripcion">{producto.descripcion}</p>
          <p className="detalle-precio">Precio: ${producto.precio.toLocaleString('es-CL')}</p>
          <button className="boton-comprar" onClick={handleAgregarAlCarrito}>Comprar</button>
          <Link to="/productos" className="boton-detalle" style={{ marginLeft: '1rem' }}>Volver a Productos</Link>
        </div>
      </section>
    </div>
  );
}
