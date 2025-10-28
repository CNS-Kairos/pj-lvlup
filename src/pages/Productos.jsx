// Página de Productos
import { useState } from 'react';
import { productos } from '../data/productos';
import { useCarrito } from '../hooks/useCarrito';

export default function Productos() {
  // Hook del carrito
  const { agregarAlCarrito } = useCarrito();

  // Estado para productos filtrados
  const [productosFiltrados, setProductosFiltrados] = useState(productos);

  // Estado para notificación
  const [notificacion, setNotificacion] = useState('');

  // Función para filtrar productos
  const filtrarProductos = (categoria) => {
    if (categoria === 'Todos') {
      setProductosFiltrados(productos);
    } else {
      setProductosFiltrados(productos.filter(p => p.categoria === categoria));
    }
  };

  // Función para agregar al carrito con notificación
  const handleAgregarAlCarrito = (producto) => {
    agregarAlCarrito(producto);
    setNotificacion(`¡${producto.nombre} agregado al carrito!`);
    setTimeout(() => setNotificacion(''), 2000); // Ocultar después de 2s
  };

  // Categorías únicas para el select
  const categorias = ['Todos', ...new Set(productos.map(p => p.categoria))];

  return (
    <div>
      {/* Notificación flotante */}
      {notificacion && (
        <div className="notificacion-agregado">
          <i className="fa-solid fa-check-circle"></i>
          <span>{notificacion}</span>
        </div>
      )}

      {/* Sección principal de productos */}
      <section className="seccion-productos">
        <h2>Todos nuestros productos</h2>

        {/* Filtro por categorías */}
        <div className="filtro-categorias">
          <label htmlFor="filtroCategoria">Filtrar por categoría:</label>
          <select
            id="filtroCategoria"
            name="filtroCategoria"
            onChange={(e) => filtrarProductos(e.target.value)}
          >
            {categorias.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Grid de productos */}
        <div className="contenedor-productos" id="listaProductos">
          {productosFiltrados.map(producto => (
            <div key={producto.id} className="card-producto">
              <img src={`img/${producto.imagen}`} alt={`Imagen del producto ${producto.nombre}`} />
              <h3>{producto.nombre}</h3>
              <p>Precio: ${producto.precio.toLocaleString('es-CL')}</p>
              <div className="botones-producto">
                <button
                  className="boton-comprar"
                  onClick={() => handleAgregarAlCarrito(producto)}
                >
                  Comprar
                </button>
                <a href={`/producto/${producto.id}`} className="boton-detalle">
                  Ver Detalle
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Ahora si, Productos.jsx usa el hook para mostrar productos, filtrar y agregar al carrito con notificaciones. 
