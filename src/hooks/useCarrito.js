// Hook personalizado para manejar el carrito de compras
// Usa localStorage para persistir el carrito, tal cual como lo hicimos en la evaluación 1.
import { useState, useEffect } from 'react';

export function useCarrito() {
  // Estado del carrito, inicializado desde localStorage
  const [carrito, setCarrito] = useState(() => {
    const guardado = localStorage.getItem('carrito');
    return guardado ? JSON.parse(guardado) : [];
  });

  // Sincronizar con localStorage cada vez que cambie el carrito
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  // Función para agregar producto al carrito (Esta vez no tiene limite de unidades como en html estatico)
  const agregarAlCarrito = (producto) => {
    setCarrito(prevCarrito => {
      const existe = prevCarrito.find(p => p.id === producto.id);
      if (existe) {
        return prevCarrito.map(p =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      } else {
        return [...prevCarrito, { ...producto, cantidad: 1 }];
      }
    });
  };

  // Función para quitar una unidad de un producto
  const quitarDelCarrito = (id) => {
    setCarrito(prevCarrito =>
      prevCarrito.map(p =>
        p.id === id && p.cantidad > 1 ? { ...p, cantidad: p.cantidad - 1 } : p
      ).filter(p => p.cantidad > 0) // Remover si llega a 0
    );
  };

  // Función para eliminar producto completamente
  const eliminarProducto = (id) => {
    setCarrito(prevCarrito => prevCarrito.filter(p => p.id !== id));
  };

  // Función para limpiar todo el carrito
  const limpiarCarrito = () => {
    setCarrito([]);
  };

  // Función para calcular el total del carrito
  const calcularTotal = () => {
    return carrito.reduce((total, p) => total + (p.precio * p.cantidad), 0);
  };

  // Función para obtener el total de productos en el carrito
  const totalProductos = () => {
    return carrito.reduce((total, p) => total + p.cantidad, 0);
  };

  // Retornar el estado y las funciones
  return {
    carrito,
    agregarAlCarrito,
    quitarDelCarrito,
    eliminarProducto,
    limpiarCarrito,
    calcularTotal,
    totalProductos
  };
}

// Este hook maneja toda la lógica del carrito, con localStorage y límites. No debería tener problemas testeandolo después con Jasmine y Karma. 