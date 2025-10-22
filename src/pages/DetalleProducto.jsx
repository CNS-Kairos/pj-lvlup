// Página Detalle de Producto
export default function DetalleProducto() {
  return (
    <div>
      {/* Sección principal del detalle de producto */}
      <section className="seccion-detalle-producto">
        {/* Imagen del producto */}
        <div className="detalle-imagen">
          {/* Aquí irá la imagen del producto */}
        </div>

        {/* Información del producto */}
        <div className="detalle-info">
          <h2>Nombre del Producto</h2>
          <p className="detalle-descripcion">Descripción del producto...</p>
          <p className="detalle-precio">Precio: $0.000</p>
          <button className="boton-comprar">Comprar</button>
        </div>
      </section>
    </div>
  );
}
