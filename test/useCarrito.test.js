// Archivo: test/useCarrito.test.js

// Importamos la herramienta moderna para probar Hooks.
// Usaremos la versión que viene de @testing-library/react (para React 18+).
import { renderHook, act } from "@testing-library/react";

// Importamos el Hook y el Provider de tu Contexto.
// Asegúrate de que el path sea correcto: 'src/hooks/useCarrito'
import { useCarrito, CarritoProvider } from "../src/hooks/useCarrito";

// Datos de prueba para simular un producto.
const productoDePrueba = {
  id: 100,
  nombre: "Test Game",
  precio: 50,
  cantidad: 1,
};

// Limpiamos localStorage antes de cada prueba para asegurar un estado limpio.
beforeEach(() => {
  localStorage.clear();
});

describe("useCarrito CRUD y Totales", () => {
  // CORRECCIÓN: 'test' cambiado a 'it'
  it("debe inicializar el carrito vacío y calcular total 0", () => {
    // renderHook ejecuta tu hook dentro de un componente simulado.
    const { result } = renderHook(() => useCarrito(), {
      wrapper: CarritoProvider,
    }); // Verificaciones (Asserts) de Jasmine

    expect(result.current.carrito.length).toBe(0);
    expect(result.current.totalProductos()).toBe(0);
    expect(result.current.calcularTotal()).toBe(0);
  }); // CORRECCIÓN: 'test' cambiado a 'it'

  it("debe agregar un producto y aumentar la cantidad total", () => {
    const { result } = renderHook(() => useCarrito(), {
      wrapper: CarritoProvider,
    }); // Usamos 'act' para envolver las actualizaciones de estado (setCarrito)

    act(() => {
      result.current.agregarAlCarrito(productoDePrueba);
    }); // Verificación después de la acción

    expect(result.current.carrito.length).toBe(1);
    expect(result.current.totalProductos()).toBe(1);
    expect(result.current.carrito[0].nombre).toBe("Test Game");
  }); // CORRECCIÓN: 'test' cambiado a 'it'

  it("debe incrementar la cantidad del producto existente", () => {
    const { result } = renderHook(() => useCarrito(), {
      wrapper: CarritoProvider,
    }); // 1. Agregar el primero

    act(() => {
      result.current.agregarAlCarrito(productoDePrueba);
    }); // 2. Agregar el segundo
    act(() => {
      result.current.agregarAlCarrito(productoDePrueba);
    }); // Verificación: la longitud sigue siendo 1, pero la cantidad subió a 2

    expect(result.current.carrito.length).toBe(1);
    expect(result.current.carrito[0].cantidad).toBe(2);
    expect(result.current.totalProductos()).toBe(2);
    expect(result.current.calcularTotal()).toBe(100); // 2 * 50
  }); // CORRECCIÓN: 'test' cambiado a 'it'

  it("debe eliminar una unidad con quitarDelCarrito", () => {
    const { result } = renderHook(() => useCarrito(), {
      wrapper: CarritoProvider,
    }); // Cargar dos unidades (estado inicial para esta prueba)
    act(() => {
      result.current.agregarAlCarrito(productoDePrueba);
      result.current.agregarAlCarrito(productoDePrueba);
    }); // Quitar una unidad

    act(() => {
      result.current.quitarDelCarrito(productoDePrueba.id);
    }); // Verificación

    expect(result.current.carrito.length).toBe(1);
    expect(result.current.carrito[0].cantidad).toBe(1);
    expect(result.current.totalProductos()).toBe(1);
  }); // CORRECCIÓN: 'test' cambiado a 'it'

  it("debe eliminar el producto completamente con eliminarProducto", () => {
    const { result } = renderHook(() => useCarrito(), {
      wrapper: CarritoProvider,
    }); // Cargar un producto
    act(() => {
      result.current.agregarAlCarrito(productoDePrueba);
    }); // Eliminar el producto

    act(() => {
      result.current.eliminarProducto(productoDePrueba.id);
    }); // Verificación

    expect(result.current.carrito.length).toBe(0);
    expect(result.current.totalProductos()).toBe(0);
  });
});
