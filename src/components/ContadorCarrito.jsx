// Componente para mostrar el contador del carrito en el navbar
// Usa el hook useCarrito para obtener el total de productos en tiempo real
import React from 'react';
import { useCarrito } from '../hooks/useCarrito';

export default function ContadorCarrito() {
  // Obtener el total de productos del hook
  const { totalProductos } = useCarrito();

  return (
    <span id="contadorCarrito" className={totalProductos > 0 ? 'tiene-productos' : ''}>
      {totalProductos}
    </span>
  );
}

// Comentario: Componente simple que muestra el número total de items en el carrito, actualizado en tiempo real. 