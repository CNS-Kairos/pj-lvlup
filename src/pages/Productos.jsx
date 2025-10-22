// Página de Productos
export default function Productos() {
  return (
    <div>
      {/* Sección principal de productos */}
      <section className="seccion-productos">
        <h2>Todos nuestros productos</h2>

        {/* Filtro por categorías (sin funcionalidad aún) */}
        <div className="filtro-categorias">
          <label htmlFor="filtroCategoria">Filtrar por categoría:</label>
          <select id="filtroCategoria" name="filtroCategoria">
            <option value="Todos">Todos los productos</option>
            {/* Aquí irán más opciones de categorías */}
          </select>
        </div>

        {/* Grid de productos */}
        <div className="contenedor-productos" id="listaProductos">
          {/* Aquí se mostrarán los productos (cards) */}
        </div>
      </section>
    </div>
  );
}
