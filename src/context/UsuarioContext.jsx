import { createContext, useContext, useState, useEffect } from 'react';
import { usuariosIniciales } from '../data/usuarios';

// Contexto para estado global de usuarios
const UsuarioContext = createContext();

// Hook para acceder al contexto de usuarios
export const useUsuarios = () => {
  const context = useContext(UsuarioContext);
  if (!context) {
    throw new Error("useUsuarios debe ser usado dentro de un UsuarioProvider");
  }
  return context;
};

// Provider que envuelve la app y provee estado de usuarios
export function UsuarioProvider({ children }) {
  // Estado de usuarios, inicializado desde localStorage o datos iniciales
  const [usuarios, setUsuarios] = useState(() => {
    try {
      const guardado = localStorage.getItem('usuarios_db');
      return guardado ? JSON.parse(guardado) : usuariosIniciales;
    } catch (error) {
      console.error("Error al cargar usuarios de localStorage:", error);
      return usuariosIniciales;
    }
  });

  // Guarda usuarios en localStorage cada vez que cambian
  useEffect(() => {
    try {
      localStorage.setItem('usuarios_db', JSON.stringify(usuarios));
    } catch (error) {
      console.error("Error al guardar usuarios en localStorage:", error);
    }
  }, [usuarios]);

  // Crea nuevo usuario con ID automático y estado 'Activo'
  const crearUsuario = (datos) => {
    const nuevoUsuario = {
      ...datos,
      id: Date.now(),
      estado: 'Activo'
    };
    setUsuarios(prev => [...prev, nuevoUsuario]);
  };

  // Elimina usuario por ID
  const eliminarUsuario = (id) => {
    setUsuarios(prev => prev.filter(usuario => usuario.id !== id));
  };

  // Actualiza usuario existente con nuevos datos
  const actualizarUsuario = (id, datos) => {
    setUsuarios(prev => prev.map(usuario =>
      usuario.id === id ? { ...usuario, ...datos } : usuario
    ));
  };

  // Valor que se comparte en el contexto
  const value = { usuarios, crearUsuario, eliminarUsuario, actualizarUsuario };

  return <UsuarioContext.Provider value={value}>{children}</UsuarioContext.Provider>;
}