// Productos admin
// Página productos admin
export default function ProductosAdmin() {
  return (
    <section>
      <h2>Gestión de Productos</h2>
      <p>Inventario actual de la tienda</p>

      {/* Botón agregar producto */}
      <div>
        <button>
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
            {/* Los productos se cargarán aquí */}
          </tbody>
        </table>
      </div>
    </section>
  );
}
