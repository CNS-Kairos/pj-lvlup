import { createContext, useContext, useState, useEffect } from "react";
import { useNotificacion } from "./NotificacionContext";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);
  // Aqui está la llamada del hook useNotificacion. Por eso me estaba dando error, ahora debería funcionar bien.
  const { mostrarNotificacion } = useNotificacion();

  useEffect(() => {
    try {
      const guardado = localStorage.getItem("usuario_logueado");
      if (guardado) {
        setUsuario(JSON.parse(guardado));
      }
    } catch (error) {
      console.error("Error al cargar usuario de localStorage:", error);
    } finally {
      setCargando(false);
    }
  }, []);

  const login = (email, password) => {
    if (email === "admin@levelup.cl" && password === "admin123") {
      const user = { email, rol: "admin" };
      setUsuario(user);
      localStorage.setItem("usuario_logueado", JSON.stringify(user));
      return user;
    } else if (email === "cliente@mail.com" && password === "123") {
      const user = { email, rol: "cliente" };
      setUsuario(user);
      localStorage.setItem("usuario_logueado", JSON.stringify(user));
      return user;
    } else {
      // Esta línea ahora funcionará correctamente
      mostrarNotificacion("Email o contraseña incorrectos", "error");
      return null;
    }
  };

  const registro = (datos) => {
    const user = { email: datos.correo, rol: "cliente" };
    setUsuario(user);
    localStorage.setItem("usuario_logueado", JSON.stringify(user));
    return user;
  };

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("usuario_logueado");
  };

  const value = { usuario, cargando, login, logout, registro };

  return <AuthContext.Provider value={value}>{children} </AuthContext.Provider>;
}
