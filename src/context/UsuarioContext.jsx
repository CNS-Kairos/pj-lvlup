import { createContext, useContext, useState, useEffect } from 'react';
import { usuariosIniciales } from '../data/usuarios';

const UsuarioContext = createContext();

export const useUsuarios = () => {
  const context = useContext(UsuarioContext);
  if (!context) {
    throw new Error("useUsuarios debe ser usado dentro de un UsuarioProvider");
  }
  return context;
};

export function UsuarioProvider({ children }) {
  const [usuarios, setUsuarios] = useState(() => {
    try {
      const guardado = localStorage.getItem('usuarios_db');
      return guardado ? JSON.parse(guardado) : usuariosIniciales;
    } catch (error) {
      console.error("Error al cargar usuarios de localStorage:", error);
      return usuariosIniciales;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('usuarios_db', JSON.stringify(usuarios));
    } catch (error) {
      console.error("Error al guardar usuarios en localStorage:", error);
    }
  }, [usuarios]);

  const crearUsuario = (datos) => {
    const nuevoUsuario = {
      ...datos,
      id: Date.now(),
      estado: 'Activo'
    };
    setUsuarios(prev => [...prev, nuevoUsuario]);
  };

  const eliminarUsuario = (id) => {
    setUsuarios(prev => prev.filter(usuario => usuario.id !== id));
  };

  const actualizarUsuario = (id, datos) => {
    setUsuarios(prev => prev.map(usuario =>
      usuario.id === id ? { ...usuario, ...datos } : usuario
    ));
  };

  const value = { usuarios, crearUsuario, eliminarUsuario, actualizarUsuario };

  return <UsuarioContext.Provider value={value}>{children}</UsuarioContext.Provider>;
}