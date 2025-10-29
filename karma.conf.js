// Archivo: karma.conf.js (Versión CORREGIDA con Webpack)
module.exports = function (config) {
  config.set({
    basePath: "", // Incluimos 'webpack' en los frameworks
    frameworks: ["jasmine", "webpack"], // 🛑 CORRECCIÓN CLAVE: Solo cargamos el archivo(s) de prueba.

    // Webpack se encargará de importar todos los archivos JSX/JS necesarios.
    files: ["test/**/*.test.js"], // No necesitamos `exclude` ya que solo cargamos archivos de prueba. // 🛑 CORRECCIÓN CLAVE: El preprocesador es SOLO Webpack.

    preprocessors: {
      "test/**/*.test.js": ["webpack"],
    }, // Ejecutores de tests (browsers).

    browsers: ["Chrome"], // Webpack Configuration (asumiendo que está en el mismo nivel)

    webpack: require("./webpack.config.js"), // Aseguramos que el plugin de Webpack esté explícitamente listado

    plugins: [
      "karma-jasmine",
      "karma-chrome-launcher",
      "karma-babel-preprocessor", // Se mantiene por si acaso, aunque Webpack lo maneja
      "karma-webpack", // <-- Necesitas este plugin para que la integración funcione
    ], // Reportes de resultados.

    reporters: ["progress"], // Configuración estándar

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity,
  });
};
