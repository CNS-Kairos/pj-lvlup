// Mocks deben ir ANTES de los imports
jest.mock('react-router-dom', () => ({
  Navigate: ({ to }) => <div data-testid="navigate" data-to={to}>Redirecting to {to}</div>,
  Outlet: () => <div data-testid="protected-content">Contenido Protegido</div>
}));

jest.mock('../context/AuthContext', () => ({
  useAuth: () => ({
    usuario: { email: 'admin@test.com', rol: 'admin' },
    cargando: false
  })
}));

jest.mock('../context/NotificacionContext', () => ({
  useNotificacion: () => ({
    mostrarNotificacion: jest.fn()
  })
}));

import { render, screen } from '@testing-library/react';
import RutaAdmin from '../components/RutaAdmin';

// Prueba 21: RutaAdmin renderiza contenido cuando usuario admin esta autenticado
test('RutaAdmin renderiza contenido cuando hay usuario admin autenticado', () => {
  render(<RutaAdmin />);

  // Debería mostrar el Outlet (contenido protegido)
  expect(screen.getByTestId('protected-content')).toBeInTheDocument();
  expect(screen.getByText('Contenido Protegido')).toBeInTheDocument();
});

// Prueba 22: RutaAdmin existe y es una funcion
test('RutaAdmin es un componente valido', () => {
  expect(typeof RutaAdmin).toBe('function');
  expect(RutaAdmin.name).toBe('RutaAdmin');
});

// Prueba 23: RutaAdmin puede ser importado
test('RutaAdmin puede ser importado correctamente', () => {
  expect(RutaAdmin).toBeDefined();
  expect(RutaAdmin).not.toBeNull();
});