import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../components/Navbar';

// Mock del hook useCarrito que usa ContadorCarrito
jest.mock('../hooks/useCarrito', () => ({
  useCarrito: () => ({
    totalProductos: () => 3 // Mock que retorna 3 productos
  })
}));

// Mock del contexto de autenticación
jest.mock('../context/AuthContext', () => ({
  useAuth: () => ({
    usuario: null, // Usuario no autenticado por defecto
    logout: jest.fn()
  })
}));

// Wrapper simplificado para testing (sin BrowserRouter por ahora)
// const NavbarWrapper = ({ children }) => (
//   <BrowserRouter>
//     {children}
//   </BrowserRouter>
// );

// Prueba 16: Navbar se renderiza con logo
test('Navbar muestra el logo correctamente', () => {
  // Por ahora renderizamos sin BrowserRouter para evitar errores de dependencias
  render(<Navbar />);

  // Verificar que el logo esté presente
  const logo = screen.getByAltText('Logo de Level-Up Gamer');
  expect(logo).toBeInTheDocument();
});

// Prueba 17: Navbar tiene enlaces de navegacion principales
test('Navbar contiene enlaces de navegacion principales', () => {
  render(<Navbar />);

  // Verificar enlaces principales
  expect(screen.getByText('Inicio')).toBeInTheDocument();
  expect(screen.getByText('Productos')).toBeInTheDocument();
  expect(screen.getByText('Blogs')).toBeInTheDocument();
  expect(screen.getByText('Nosotros')).toBeInTheDocument();
  expect(screen.getByText('Contacto')).toBeInTheDocument();
});

// Prueba 18: Navbar muestra enlaces de login cuando no hay usuario
test('Navbar muestra enlaces de autenticacion cuando usuario no esta logueado', () => {
  render(<Navbar />);

  // Verificar enlaces de login y registro
  expect(screen.getByText('Iniciar Sesión')).toBeInTheDocument();
  expect(screen.getByText('Registrarse')).toBeInTheDocument();

  // No debería mostrar información de usuario logueado
  expect(screen.queryByText(/Bienvenido/)).not.toBeInTheDocument();
  expect(screen.queryByText('Cerrar Sesión')).not.toBeInTheDocument();
});

// Prueba 19: Navbar tiene enlace al carrito
test('Navbar contiene enlace al carrito de compras', () => {
  render(<Navbar />);

  // Verificar enlace al carrito
  expect(screen.getByText('Carrito')).toBeInTheDocument();

  // Verificar icono del carrito
  const iconoCarrito = document.querySelector('.fa-cart-shopping');
  expect(iconoCarrito).toBeInTheDocument();
});

// Prueba 20: Navbar tiene la estructura HTML correcta
test('Navbar tiene la estructura HTML correcta', () => {
  const { container } = render(<Navbar />);

  // Verificar estructura básica
  const header = container.querySelector('header');
  expect(header).toBeInTheDocument();

  const nav = container.querySelector('.navbar');
  expect(nav).toBeInTheDocument();

  const menuDerecha = container.querySelector('.menu-derecha');
  expect(menuDerecha).toBeInTheDocument();
});