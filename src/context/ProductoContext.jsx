// Importaciones necesarias de React y los productos iniciales
import { createContext, useContext, useState, useEffect } from "react";
import { productos as productosIniciales } from "../data/productos";

// Crear el Contexto
// Este es el "túnel" por el que pasarán los datos.
const ProductoContext = createContext();

// Crear el Hook personalizado (useProductos)
// Es la forma fácil para que los componentes accedan al contexto.
export const useProductos = () => {
  const context = useContext(ProductoContext);
  // Si un componente llama a este hook fuera del Provider, falla rápido.
  if (!context) {
    throw new Error(
      "useProductos debe ser usado dentro de un ProductoProvider"
    );
  }
  return context;
};

// Crear el Proveedor (ProductoProvider)
// Este es el componente "cerebro" que envuelve la app y maneja el estado.
export function ProductoProvider({ children }) {
  // Estado principal de los productos
  // Inicializa el estado usando una función (lazy initialization).
  const [productos, setProductos] = useState(() => {
    try {
      // Intenta leer los productos guardados en localStorage.
      const productosGuardados = localStorage.getItem("productos_db");
      // Si hay datos guardados, úsalos. Si no (o es la primera vez), usa la lista estática.
      return productosGuardados
        ? JSON.parse(productosGuardados)
        : productosIniciales;
    } catch (error) {
      // Si falla la lectura de localStorage, usa los datos iniciales como respaldo.
      console.error("Error al cargar productos de localStorage:", error);
      return productosIniciales;
    }
  }); // Efecto secundario para persistir en localStorage // Este hook se ejecuta CADA VEZ que el estado `productos` cambia.

  useEffect(() => {
    try {
      // Guarda la lista actual de productos en localStorage.
      localStorage.setItem("productos_db", JSON.stringify(productos));
    } catch (error) {
      console.error("Error al guardar productos en localStorage:", error);
    }
  }, [productos]); // La dependencia se dispara si productos cambia. // Función CREAR (Create) // Recibe los datos del formulario de NuevoProductoAdmin.

  const crearProducto = (productoForm) => {
    const nuevoProducto = {
      ...productoForm, // Copia todos los datos (nombre, desc, img, etc.)
      id: Date.now(), // Genera un ID único basado en la fecha/hora.
      // Asegura que precio y stock se guarden como números.
      precio: parseFloat(productoForm.precio),
      stock: parseInt(productoForm.stock),
    };
    // Actualiza el estado: toma la lista anterior (prev) y le añade el nuevo.
    setProductos((prev) => [...prev, nuevoProducto]);
    return nuevoProducto; // Devuelve el producto creado (opcional).
  }; // Función ELIMINAR (Delete) // Recibe el ID del producto a eliminar.

  const eliminarProducto = (id) => {
    // Actualiza el estado, filtra la lista, devolviendo solo los
    // productos cuyo ID NO coincida con el que queremos borrar.
    setProductos((prev) => prev.filter((p) => p.id !== id));
  }; // Función ACTUALIZAR (Update), recibe el ID del producto a cambiar y los nuevos datos.

  const actualizarProducto = (id, datos) => {
    // Actualiza el estado: mapea la lista...
    setProductos((prev) =>
      prev.map((producto) =>
        // Si el ID coincide, devuelve una copia del producto
        // fusionada con los nuevos datos.
        producto.id === id
          ? {
              ...producto,
              ...datos,
              precio: parseFloat(datos.precio || producto.precio),
              stock: parseInt(datos.stock || producto.stock),
            }
          : // Si no coincide, devuelve el producto tal cual.
            producto
      )
    );
  }; // Valor del Contexto // Define qué datos y funciones se compartirán con los componentes hijos.

  const value = {
    productos,
    crearProducto,
    eliminarProducto,
    actualizarProducto,
  }; // Retorno del Provider // Envuelve a los componentes hijos (children) y les da acceso al `value`.

  return (
    <ProductoContext.Provider value={value}>
      {children}{" "}
    </ProductoContext.Provider>
  );
}
