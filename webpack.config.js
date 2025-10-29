// Archivo: webpack.config.js
const path = require("path");

module.exports = {
  // Modo de desarrollo para facilitar la depuración de las pruebas.
  mode: "development",

  // Configuración de Módulos
  module: {
    rules: [
      {
        // Regla para procesar todos los archivos .js y .jsx
        test: /\.(js|jsx)$/,
        // Excluye la carpeta node_modules (para que Babel solo procese nuestro código)
        exclude: /node_modules/,
        use: {
          // Usa 'babel-loader' para transpilar (convierte JSX/Hooks a JS plano)
          // Babel usará la configuración que tienes en tu archivo .babelrc
          loader: "babel-loader",
        },
      },
      // NOTA: Si importas archivos CSS o imágenes dentro de tus archivos JS/JSX,
      // necesitarías añadir reglas para 'css-loader' y 'style-loader' aquí.
      // Por ahora, solo incluimos la regla de React/Babel.
    ],
  },

  // Configuración de Resolución (Para importaciones)
  resolve: {
    // Permite usar 'import X from "../componentes/Y"' sin escribir la extensión (.jsx)
    extensions: [".js", ".jsx"],
  },

  // 🛑 CORRECCIÓN CLAVE: Eliminar 'process' y simplificar 'node'
  node: {
    __dirname: false,
    __filename: false,
    global: true, // 'process: true' ELIMINADO. Webpack lo maneja internamente.
  },
};
