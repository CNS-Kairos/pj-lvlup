import { render, screen } from '@testing-library/react';
import ContadorCarrito from '../components/ContadorCarrito';

// Mock del hook useCarrito
jest.mock('../hooks/useCarrito', () => ({
  useCarrito: () => ({
    totalProductos: () => 5 // Mock que retorna 5 productos
  })
}));

// Prueba 7: ContadorCarrito muestra el numero correcto
test('ContadorCarrito muestra el total de productos', () => {
  render(<ContadorCarrito />);

  // Verificar que muestre el número 5 (del mock)
  expect(screen.getByText('5')).toBeInTheDocument();
});

// Prueba 8: ContadorCarrito tiene el ID correcto
test('ContadorCarrito tiene el ID contadorCarrito', () => {
  render(<ContadorCarrito />);

  const contador = document.getElementById('contadorCarrito');

  expect(contador).toBeInTheDocument();
  expect(contador).toHaveTextContent('5');
});

// Prueba 9: ContadorCarrito tiene clases CSS correctas
test('ContadorCarrito tiene clases CSS apropiadas', () => {
  render(<ContadorCarrito />);

  const contador = document.getElementById('contadorCarrito');

  // Debería tener la clase base contador-carrito
  expect(contador).toHaveClass('contador-carrito');

  // Como totalProductos() > 0, debería tener la clase tiene-productos
  expect(contador).toHaveClass('tiene-productos');
});