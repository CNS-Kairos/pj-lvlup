import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Blogs from "./pages/Blogs";
import Productos from "./pages/Productos";
import DetalleProducto from "./pages/DetalleProducto";
import Carrito from "./pages/Carrito";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import DetalleBlog1 from "./pages/DetalleBlog1";
import DetalleBlog2 from "./pages/DetalleBlog2";
import NotFound from "./pages/NotFound";
import AdminLayout from "./admin/layouts/AdminLayout";
import DashboardAdmin from "./admin/pages/DashboardAdmin";
import ProductosAdmin from "./admin/pages/ProductosAdmin";
import UsuariosAdmin from "./admin/pages/UsuariosAdmin";
import NuevoUsuarioAdmin from "./admin/pages/NuevoUsuarioAdmin";

export default function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main>
          <Routes>
            {/* Rutas públicas */}
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/nfts-en-videojuegos" element={<DetalleBlog1 />} />
            <Route path="/blogs/5g-en-gaming" element={<DetalleBlog2 />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/producto/:id" element={<DetalleProducto />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />

            {/* Rutas admin (para acceder a ellas en un futuro, hay que generar la lógica del login) */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<DashboardAdmin />} />
              <Route path="productos" element={<ProductosAdmin />} />
              <Route path="usuarios" element={<UsuariosAdmin />} />
              <Route path="usuarios/nuevo" element={<NuevoUsuarioAdmin />} />
            </Route>

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
