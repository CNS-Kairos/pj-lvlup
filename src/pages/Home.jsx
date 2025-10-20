import logo from "../assets/img/logo-lvl-up.png";
import hyperXCloud from "../assets/img/HyperX Cloud II.webp";
import sillaGamer from "../assets/img/Silla Gamer Secretlab Titan.jpg";
import mouseGamer from "../assets/img/Mouse Gamer Logitech G502 HERO.webp";
import eldenRing from "../assets/img/elden ring.webp";
import RDR2 from "../assets/img/read dead redemption 2.webp";
import marioKart from "../assets/img/martio kart deluxe.webp";

export default function Home() {
  return (
    <div>
      {/* <!-- Banner de bienvenida --> */}
      <section className="banner-principal">
        <h1>¡Tienda Level-Up!</h1>
        <p>Los mejores productos gaming a un clic de distancia.</p>
      </section>
      {/* Información sobre nosotros */}
      <section className="sobre-empresa">
        <h2>Sobre la Empresa</h2>
        
        {/* Logo centrado */}
        <img
          src={logo}
          width="200px"
          alt="Logo de Level-Up Gamer"
          style={{ display: 'block', margin: '2rem auto' }}
        />
        
        {/* Texto de la empresa */}
        <p>
          Level-Up Gamer es una tienda online dedicada a satisfacer las
          necesidades de los entusiastas de los videojuegos en Chile.
          Lanzada hace dos años como respuesta a la creciente demanda,
          ofrecemos una amplia gama de productos para gamers, desde consolas
          y accesorios hasta computadores y sillas especializadas.
        </p>
        <p>
          Aunque no contamos con una ubicación física, realizamos despachos
          a todo el país. Nuestra misión es proporcionar productos de alta
          calidad y una experiencia de compra única y personalizada.
        </p>
      </section>

      {/* <!-- Productos destacados para mostrar en el home --> */}
      <section className="productos-destacados">
        <h2>Productos Destacados</h2>
        <div className="contenedor-productos">
          <div className="card-producto">
            <img
              src={hyperXCloud}
              width="180px"
              alt="Auriculares Gamer HyperX Cloud II"
            />
            <h3>Auriculares Gamer HyperX Cloud II</h3>
            <p>$79.990 CLP</p>
            <div className="botones-producto">
              <a href="detalle-producto.html?id=10" className="boton-comprar">
                Comprar
              </a>
              <a href="detalle-producto.html?id=10" className="boton-detalle">
                Ver Detalle
              </a>
            </div>
          </div>

          <div className="card-producto">
            <img
              src={sillaGamer}
              width="180px"
              alt="Silla Gamer Secretlab Titan"
            />
            <h3>Silla Gamer Secretlab Titan</h3>
            <p>$349.990 CLP</p>
            <div className="botones-producto">
              <a href="detalle-producto.html?id=11" className="boton-comprar">
                Comprar
              </a>
              <a href="detalle-producto.html?id=11" className="boton-detalle">
                Ver Detalle
              </a>
            </div>
          </div>

          {/* <!-- Más productos para completar la selección --> */}
          <div className="card-producto">
            <img
              src={mouseGamer}
              width="180px"
              alt="Mouse Gamer Logitech G502 HERO"
            />
            <h3>Mouse Gamer Logitech G502 HERO</h3>
            <p>$49.990 CLP</p>
            <div className="botones-producto">
              <a href="detalle-producto.html?id=12" className="boton-comprar">
                Comprar
              </a>
              <a href="detalle-producto.html?id=12" className="boton-detalle">
                Ver Detalle
              </a>
            </div>
          </div>

          <div className="card-producto">
            <img
              src={eldenRing}
              width="180px"
              alt="Videojuego Elden Ring para PS5"
            />
            <h3>Playstation 5 - Elden Ring</h3>
            <p>$59.990 CLP</p>
            <div className="botones-producto">
              <a href="detalle-producto.html?id=13" className="boton-comprar">
                Comprar
              </a>
              <a href="detalle-producto.html?id=13" className="boton-detalle">
                Ver Detalle
              </a>
            </div>
          </div>

          <div className="card-producto">
            <img
              src={RDR2}
              width="180px"
              alt="Videojuego Red Dead Redemption 2 para Xbox One"
            />
            <h3>Xbox One - Red Dead Redemption 2</h3>
            <p>$59.990 CLP</p>
            <div className="botones-producto">
              <a href="detalle-producto.html?id=14" className="boton-comprar">
                Comprar
              </a>
              <a href="detalle-producto.html?id=14" className="boton-detalle">
                Ver Detalle
              </a>
            </div>
          </div>

          <div className="card-producto">
            <img
              src={marioKart}
              width="180px"
              alt="Videojuego Mario Kart Deluxe para Nintendo Switch"
            />
            <h3>Nintendo Switch - Mario Kart Deluxe</h3>
            <p>$59.990 CLP</p>
            <div className="botones-producto">
              <a href="detalle-producto.html?id=15" className="boton-comprar">
                Comprar
              </a>
              <a href="detalle-producto.html?id=15" className="boton-detalle">
                Ver Detalle
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
