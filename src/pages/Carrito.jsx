// Página Carrito de Compras
import { useCarrito } from '../hooks/useCarrito';

export default function Carrito() {
  // Usar hook del carrito
  const { carrito } = useCarrito();

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
                  <span className="cantidad">{item.cantidad}</span>
                </div>
                <div className="precio-total">
                  <strong>${(item.precio * item.cantidad).toLocaleString('es-CL')}</strong>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Resumen y acciones del carrito */}
        <div className="resumen-carrito">
          <div className="total-carrito" id="totalCarrito">
            Total: $0
          </div>

          <div className="acciones-carrito">
            <button className="boton-limpiar">
              <i className="fa-solid fa-trash"></i> Limpiar Carrito
            </button>
            <a href="/productos" className="boton-continuar">
              <i className="fa-solid fa-arrow-left"></i> Seguir Comprando
            </a>
            <button className="boton-finalizar">
              <i className="fa-solid fa-credit-card"></i> Finalizar Compra
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Carrito.jsx ahora muestra lista básica de items desde el hook, con mensaje vacío. 
