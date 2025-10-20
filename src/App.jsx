import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main>
          <Routes><Route path="/" element={<Home />} /></Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
