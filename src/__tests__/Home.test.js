import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

// Prueba 10: Home se renderiza correctamente
test('Home se renderiza con banner principal', () => {
  render(<Home />);

  // Verificar que el título del banner esté presente
  expect(screen.getByText('¡Tienda Level-Up!')).toBeInTheDocument();

  // Verificar el subtítulo del banner
  expect(screen.getByText('Los mejores productos gaming a un clic de distancia.')).toBeInTheDocument();
});

// Prueba 11: Home tiene seccion sobre la empresa
test('Home contiene seccion sobre la empresa', () => {
  render(<Home />);

  // Verificar título de la sección
  expect(screen.getByText('Sobre la Empresa')).toBeInTheDocument();

  // Verificar que contenga texto sobre Level-Up Gamer
  expect(screen.getByText(/Level-Up Gamer es una tienda online/)).toBeInTheDocument();
});

// Prueba 12: Home tiene productos destacados
test('Home muestra productos destacados', () => {
  render(<Home />);

  // Verificar título de productos destacados
  expect(screen.getByText('Productos Destacados')).toBeInTheDocument();

  // Verificar que algunos productos estén presentes
  expect(screen.getByText('Auriculares Gamer HyperX Cloud II')).toBeInTheDocument();
  expect(screen.getByText('Silla Gamer Secretlab Titan')).toBeInTheDocument();
  expect(screen.getByText('Mouse Gamer Logitech G502 HERO')).toBeInTheDocument();
});

// Prueba 13: Home tiene imagenes de productos
test('Home contiene imagenes de productos', () => {
  render(<Home />);

  // Verificar que existan imágenes con los alts correctos
  const imagenes = screen.getAllByRole('img');
  expect(imagenes.length).toBeGreaterThan(6); // Logo + 6 productos

  // Verificar alt de una imagen específica
  expect(screen.getByAltText('Logo de Level-Up Gamer')).toBeInTheDocument();
});

// Prueba 14: Home tiene enlaces de compra
test('Home contiene enlaces de compra y detalle', () => {
  render(<Home />);

  // Verificar que existan botones de comprar
  const botonesComprar = screen.getAllByText('Comprar');
  expect(botonesComprar.length).toBe(6); // Uno por cada producto

  // Verificar que existan botones de ver detalle
  const botonesDetalle = screen.getAllByText('Ver Detalle');
  expect(botonesDetalle.length).toBe(6); // Uno por cada producto
});

// Prueba 15: Home tiene estructura de cards de productos
test('Home tiene estructura correcta de cards de productos', () => {
  const { container } = render(<Home />);

  // Verificar que exista el contenedor de productos
  const contenedorProductos = container.querySelector('.contenedor-productos');
  expect(contenedorProductos).toBeInTheDocument();

  // Verificar que existan las cards de productos
  const cardsProductos = container.querySelectorAll('.card-producto');
  expect(cardsProductos.length).toBe(6); // 6 productos destacados
});