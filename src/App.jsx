import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
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
      <Routes>
        {/* Rutas públicas con su layout */}
        <Route element={<PublicLayout />}>
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
          <Route path="*" element={<NotFound />} />
        </Route>
        {/* Rutas admin con su propio layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardAdmin />} />
          <Route path="productos" element={<ProductosAdmin />} />
          <Route path="usuarios" element={<UsuariosAdmin />} />
          <Route path="usuarios/nuevo" element={<NuevoUsuarioAdmin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
