import { useState, createContext, useContext } from 'react';

const NotificacionContext = createContext();

export const useNotificacion = () => {
  const context = useContext(NotificacionContext);
  if (!context) {
    throw new Error('useNotificacion debe usarse dentro de un NotificacionProvider');
  }
  return context;
};

export function NotificacionProvider({ children }) {
  const [notificacion, setNotificacion] = useState({ visible: false, mensaje: '', tipo: 'exito' });

  const mostrarNotificacion = (mensaje, tipo = 'exito') => {
    setNotificacion({ visible: true, mensaje, tipo });
    setTimeout(() => {
      setNotificacion({ visible: false, mensaje: '', tipo: 'exito' });
    }, 2500);
  };

  const value = { notificacion, mostrarNotificacion };

  return <NotificacionContext.Provider value={value}>{children}</NotificacionContext.Provider>;
}
