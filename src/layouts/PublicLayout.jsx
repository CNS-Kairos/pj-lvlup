// Layout para rutas públicas
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PublicLayout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
