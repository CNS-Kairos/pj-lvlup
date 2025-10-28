// Página Carrito de Compras
import { useCarrito } from '../hooks/useCarrito';
import { useNavigate } from 'react-router-dom';

export default function Carrito() {
  // Usar hook del carrito
  const { carrito, agregarAlCarrito, quitarDelCarrito, eliminarProducto, limpiarCarrito, calcularTotal, totalProductos } = useCarrito();
  const navigate = useNavigate();

  // Función para finalizar compra
  const handleFinalizarCompra = () => {
    if (carrito.length === 0) {
      alert('Tu carrito está vacío. ¡Agrega algunos productos primero!');
      return;
    }
    const total = calcularTotal();
    const productosCount = totalProductos();
    // eslint-disable-next-line no-restricted-globals
    if (confirm(`¿Confirmas tu compra de ${productosCount} productos por un total de $${total.toLocaleString('es-CL')}?`)) {
      alert('¡Compra realizada con éxito! Recibirás un email de confirmación pronto.');
      limpiarCarrito();
      navigate('/productos');
    }
  };

  return (
    <div>
      {/* Sección principal del carrito */}
      <section className="seccion-carrito">
        <h2>Tu Carrito de Compras</h2>

        {/* Contenedor de productos del carrito */}
        <div className="contenedor-carrito" id="carritoCompleto">
          {carrito.length === 0 ? (
            <div className="carrito-vacio">
              <i className="fa-solid fa-cart-shopping fa-4x"></i>
              <h3>Tu carrito está vacío</h3>
              <p>¡Agrega algunos productos increíbles!</p>
              <a href="/productos" className="boton-comprar">Ver Productos</a>
            </div>
          ) : (
            carrito.map(item => (
              <div key={item.id} className="item-carrito-completo">
                <div className="imagen-producto">
                  <img src={`img/${item.imagen}`} alt={item.nombre} />
                </div>
                <div className="info-producto">
                  <h3>{item.nombre}</h3>
                  <p className="precio-unitario">${item.precio.toLocaleString('es-CL')} c/u</p>
                </div>
                <div className="controles-cantidad">
                  <button onClick={() => quitarDelCarrito(item.id)} className="btn-cantidad">-</button>
                  <span className="cantidad">{item.cantidad}</span>
                  <button onClick={() => agregarAlCarrito(item)} className="btn-cantidad">+</button>
                </div>
                <div className="precio-total">
                  <strong>${(item.precio * item.cantidad).toLocaleString('es-CL')}</strong>
                </div>
                <div className="eliminar-producto">
                  <button onClick={() => eliminarProducto(item.id)} className="btn-eliminar">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Resumen y acciones del carrito */}
        <div className="resumen-carrito">
          <div className="total-carrito" id="totalCarrito">
            <div className="resumen-total">
              <span>Total: </span>
              <strong>${calcularTotal().toLocaleString('es-CL')}</strong>
            </div>
          </div>

          <div className="acciones-carrito">
            <button onClick={limpiarCarrito} className="boton-limpiar">
              <i className="fa-solid fa-trash"></i> Limpiar Carrito
            </button>
            <a href="/productos" className="boton-continuar">
              <i className="fa-solid fa-arrow-left"></i> Seguir Comprando
            </a>
            <button onClick={handleFinalizarCompra} className="boton-finalizar">
              <i className="fa-solid fa-credit-card"></i> Finalizar Compra
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Carrito.jsx ahora incluye finalizar compra con confirmación. 
