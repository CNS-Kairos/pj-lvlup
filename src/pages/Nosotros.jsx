// Importar las imagenes del equipo
import matias from "../assets/img/matias.jpg";
import andrea from "../assets/img/Andrea.jpg";
import omar from "../assets/img/omar.jpg";

export default function Nosotros() {
  return (
    <div>
      {/* Banner de la pagina nosotros */}
      <section className="banner-nosotros">
        <h1>Sobre Nosotros</h1>
      </section>

      {/* Contenido principal de nosotros */}
      <section className="seccion-nosotros">
        <div className="contenido-nosotros">
          
          {/* Mision y vision de la empresa */}
          <div className="mision-vision">
            <h3>Nuestra Misión</h3>
            <p>
              Proporcionar productos de alta calidad para gamers en todo Chile,
              ofreciendo una experiencia de compra única y personalizada, con un
              enfoque en la satisfacción del cliente y el crecimiento de la
              comunidad gamer.
            </p>
            <h3>Nuestra Visión</h3>
            <p>
              Ser la tienda online líder en productos para gamers en Chile,
              reconocida por su innovación, servicio al cliente excepcional, y
              un programa de fidelización basado en gamificación que recompense
              a nuestros clientes más fieles.
            </p>
          </div>

          {/* Equipo de trabajo */}
          <div className="equipo">
            <h3>Nuestro Equipo</h3>
            <div className="miembros">
              
              {/* Matias */}
              <div className="miembro">
                <img src={matias} alt="Miembro del equipo 1" />
                <h4>Matias</h4>
                <p>
                  Jefe de Operaciones: A cargo de la logística, envíos y de
                  asegurar que los productos lleguen a tiempo.
                </p>
              </div>

              {/* Andrea */}
              <div className="miembro">
                <img src={andrea} alt="Miembro del equipo 2" />
                <h4>Andrea</h4>
                <p>
                  Directora Creativa: Lidera el marketing, la imagen de marca,
                  las redes sociales y el diseño del sitio web.
                </p>
              </div>

              {/* Omar */}
              <div className="miembro">
                <img src={omar} alt="Miembro del equipo 3" />
                <h4>Omar</h4>
                <p>
                  Gerente de Comunidad: Es el responsable de interactuar con
                  los clientes, crear eventos y gestionar la comunidad de
                  gamers para generar fidelidad.
                </p>
              </div>

            </div>
          </div>

          {/* Valores de la empresa */}
          <div className="nuestros-valores">
            <h3>Nuestros Valores</h3>
            <ul>
              <li>
                Innovación: Nos mantenemos al día con las últimas tecnologías y
                tendencias.
              </li>
              <li>
                Comunidad: Fomentamos un espacio de apoyo para los gamers.
              </li>
              <li>
                Calidad: Solo ofrecemos productos que cumplen con los más altos
                estándares.
              </li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}
