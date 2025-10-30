// Mock de useNavigate debe estar al inicio del archivo
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  useNavigate: () => mockNavigate,
  BrowserRouter: ({ children }) => <div>{children}</div>,
}));

// Mock del hook useAuth
const mockLogout = jest.fn();
jest.mock('../context/AuthContext', () => ({
  useAuth: () => ({
    usuario: { email: 'admin@test.com' },
    logout: mockLogout,
  })
}));

import { render, screen, fireEvent } from '@testing-library/react';
import AdminSidebar from '../components/AdminSidebar';

describe('AdminSidebar', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renderiza correctamente el sidebar de admin', () => {
    render(<AdminSidebar />);

    // Verificar que se renderiza el título
    expect(screen.getByText('Admin')).toBeInTheDocument();
  });

  test('muestra los enlaces de navegación correctos', () => {
    render(<AdminSidebar />);

    // Verificar que todos los enlaces están presentes
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Productos')).toBeInTheDocument();
    expect(screen.getByText('Nuevo Producto')).toBeInTheDocument();
    expect(screen.getByText('Usuarios')).toBeInTheDocument();
    expect(screen.getByText('Nuevo Usuario')).toBeInTheDocument();
  });

  test('muestra el email del usuario', () => {
    render(<AdminSidebar />);

    // Verificar que se muestra el email del usuario
    expect(screen.getByText('admin@test.com')).toBeInTheDocument();
  });

  test('tiene la clase CSS correcta', () => {
    const { container } = render(<AdminSidebar />);

    // Verificar que el elemento aside tiene la clase correcta
    const sidebar = container.querySelector('aside');
    expect(sidebar).toHaveClass('admin-sidebar');
  });

  test('botón de logout funciona correctamente', () => {
    render(<AdminSidebar />);

    // Encontrar y hacer click en el botón de logout
    const logoutButton = screen.getByText('Cerrar Sesión');
    fireEvent.click(logoutButton);

    // Verificar que se llamó a logout y navigate
    expect(mockLogout).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});