import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Estilos externos
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Estilos del proyecto - orden de carga importante
import "./styles/estilo.css";        // Variables, base, banners, cards y formularios globales
import "./styles/Navbar.css";        // Navbar
import "./styles/Footer.css";        // Footer
import "./styles/Home.css";          // Página Home
import "./styles/Nosotros.css";      // Página Nosotros

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

