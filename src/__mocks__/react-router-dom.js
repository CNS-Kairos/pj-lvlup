// Mock automático de react-router-dom para Jest
// Este archivo se carga automáticamente por Jest cuando encuentra 'react-router-dom'

const React = require('react');

module.exports = {
  BrowserRouter: ({ children }) => React.createElement('div', { 'data-testid': 'browser-router' }, children),
  Routes: ({ children }) => React.createElement('div', { 'data-testid': 'routes' }, children),
  Route: ({ element, path }) => React.createElement('div', { 'data-testid': `route-${path || 'default'}` }, element),
  Link: ({ children, to }) => React.createElement('a', { href: to, 'data-testid': `link-${to}` }, children),
  Navigate: ({ to, state, replace }) => React.createElement('div', {
    'data-testid': 'navigate',
    'data-to': to,
    'data-state': JSON.stringify(state),
    'data-replace': replace
  }, `Redirecting to ${to}`),
  useNavigate: () => jest.fn(),
  useLocation: () => ({ pathname: '/', search: '', hash: '', state: null }),
  useParams: () => ({}),
  Outlet: () => React.createElement('div', { 'data-testid': 'outlet' }, 'Outlet Content')
};