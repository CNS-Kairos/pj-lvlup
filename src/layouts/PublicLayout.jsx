import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Notificacion from '../components/Notificacion';

export default function PublicLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Notificacion />
      <Navbar />
      <main><Outlet /></main>
      <Footer />
    </div>
  );
}
