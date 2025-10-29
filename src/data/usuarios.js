
// Datos iniciales de usuarios simulados
export const usuariosIniciales = [
  {
    id: 1,
    run: '12345678K',
    nombre: 'Admin',
    apellidos: 'Perez',
    correo: 'admin@levelup.cl',
    rol: 'administrador',
    estado: 'Activo',
    region: 'metropolitana',
    comuna: 'santiago',
    direccion: 'Calle Falsa 123'
  },
  {
    id: 2,
    run: '98765432L',
    nombre: 'Juan',
    apellidos: 'Gonzalez',
    correo: 'cliente@mail.com',
    rol: 'cliente',
    estado: 'Activo',
    region: 'valparaiso',
    comuna: 'vina del mar',
    direccion: 'Avenida Libertad 456'
  },
  {
    id: 3,
    run: '11223344M',
    nombre: 'Maria',
    apellidos: 'Rodriguez',
    correo: 'vendedor@levelup.cl',
    rol: 'vendedor',
    estado: 'Activo',
    region: 'biobio',
    comuna: 'concepcion',
    direccion: 'Plaza España 789'
  },
  {
    id: 4,
    run: '55667788N',
    nombre: 'Carlos',
    apellidos: 'Lopez',
    correo: 'carlos.lopez@duoc.cl',
    rol: 'cliente',
    estado: 'Inactivo',
    region: 'metropolitana',
    comuna: 'las condes',
    direccion: 'Apoquindo 1010'
  }
];

// Tipos de usuario disponibles
export const TIPOS_USUARIO = ['administrador', 'cliente', 'vendedor'];