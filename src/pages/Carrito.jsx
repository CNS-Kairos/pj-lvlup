// Página Carrito de Compras
export default function Carrito() {
  return (
    <div>
      {/* Sección principal del carrito */}
      <section className="seccion-carrito">
        <h2>Tu Carrito de Compras</h2>

        {/* Contenedor de productos del carrito */}
        <div className="contenedor-carrito" id="carritoCompleto">
          {/* Aquí se mostrarán los productos agregados al carrito */}
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
