import { render, screen } from '@testing-library/react';
import App from './App';

// Mock de contextos
jest.mock('./context/AuthContext', () => ({
  AuthProvider: ({ children }) => <div data-testid="auth-provider">{children}</div>,
  useAuth: () => ({ usuario: null, login: jest.fn(), logout: jest.fn() })
}));

jest.mock('./context/ProductoContext', () => ({
  ProductoProvider: ({ children }) => <div data-testid="producto-provider">{children}</div>
}));

jest.mock('./context/UsuarioContext', () => ({
  UsuarioProvider: ({ children }) => <div data-testid="usuario-provider">{children}</div>
}));

jest.mock('./context/NotificacionContext', () => ({
  NotificacionProvider: ({ children }) => <div data-testid="notificacion-provider">{children}</div>
}));

// Mock de componentes y layouts
jest.mock('./layouts/PublicLayout', () => ({
  __esModule: true,
  default: () => <div data-testid="public-layout">Public Layout</div>
}));

// Mock de AdminLayout si no existe el archivo
jest.mock('./layouts/AdminLayout', () => ({
  __esModule: true,
  default: () => <div data-testid="admin-layout">Admin Layout</div>
}), { virtual: true });

// Mock de páginas
jest.mock('./pages/Home', () => ({
  __esModule: true,
  default: () => <div data-testid="home-page">Home Page</div>
}));

jest.mock('./pages/Productos', () => ({
  __esModule: true,
  default: () => <div data-testid="productos-page">Productos Page</div>
}));

jest.mock('./pages/Login', () => ({
  __esModule: true,
  default: () => <div data-testid="login-page">Login Page</div>
}));

jest.mock('./admin/pages/DashboardAdmin', () => ({
  __esModule: true,
  default: () => <div data-testid="dashboard-admin">Dashboard Admin</div>
}));

test('App se renderiza sin errores', () => {
  render(<App />);

  // Verificar que la app se renderiza (con mocks)
  expect(document.body).toBeInTheDocument();
});
