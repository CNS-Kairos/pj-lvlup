// Página de Blogs - Artículos recientes
import nfts from "../assets/img/nfts en juegos.jpeg";
import cincoG from "../assets/img/5g gaming.webp";

export default function Blogs() {
  return (
    <div>
      {/* Sección principal de blogs */}
      <section className="seccion-blog">
        <h2>Artículos Recientes</h2>

        {/* Contenedor de artículos */}
        <div className="contenedor-articulos">
          {/* Artículo NFTs */}
          <div className="card-articulo">
            <img
              src={nfts}
              alt="NFTs en videojuegos"
              className="imagen-blog"
            />
            <h3>¿Qué son los NFTs en los videojuegos?</h3>
            <p>
              Descubre cómo la tecnología blockchain está cambiando el mundo de
              los juegos.
            </p>
            <a href="detalle-blog-1.html" className="boton-ver-caso">
              Ver caso
            </a>
          </div>

          {/* Artículo 5G Gaming */}
          <div className="card-articulo">
            <img src={cincoG} alt="5G y gaming" className="imagen-blog" />
            <h3>El Impacto del 5G en el Gaming</h3>
            <p>
              Analizamos cómo la velocidad del 5G transformará la experiencia de
              juego en la nube.
            </p>
            <a href="detalle-blog-2.html" className="boton-ver-caso">
              Ver caso
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
