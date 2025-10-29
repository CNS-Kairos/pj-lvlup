import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function RutaAdmin() {
  const { usuario, cargando } = useAuth();

  if (cargando) return <p>Cargando sesión...</p>;

  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  if (usuario.rol !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}