// Nuevo producto admin
// Página para registrar un nuevo producto
export default function NuevoProductoAdmin() {
  return (
    <section>
      {/* Título sección */}
      <div>
        <h2>Nuevo Producto</h2>
        <p>Complete el formulario para registrar un nuevo producto en el catálogo</p>
      </div>

      {/* Formulario nuevo producto */}
      <form noValidate>
        {/* Información básica */}
        <div>
          <h3>Información Básica</h3>
          <div>
            {/* Nombre */}
            <div>
              <label>Nombre del Producto *</label>
              <input type="text" placeholder="Ingrese el nombre del producto" maxLength={100} required />
            </div>
            {/* Descripción */}
            <div>
              <label>Descripción *</label>
              <textarea placeholder="Ingrese la descripción del producto" maxLength={500} rows={4} required />
              <div>Máximo 500 caracteres</div>
            </div>
            {/* Precio */}
            <div>
              <label>Precio *</label>
              <input type="number" placeholder="0" min={0} step={0.01} required />
              <div>En CLP, sin puntos ni comas</div>
            </div>
            {/* Categoría */}
            <div>
              <label>Categoría *</label>
              <select required>
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
              <input type="number" placeholder="0" min={0} required />
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
              <input type="url" placeholder="https://ejemplo.com/imagen.jpg" required />
              <div>Debe ser una URL válida de imagen</div>
            </div>
          </div>
        </div>

        {/* Botones acción */}
        <div>
          <button type="submit">Guardar Producto</button>
          <button type="button">Cancelar</button>
        </div>
      </form>
    </section>
  );
}