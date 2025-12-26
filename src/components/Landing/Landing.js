import "./styles/Landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <main>
        <section id="hero">
          <h1 className="fade-in">Room Layout Planner</h1>
          <p className="fade-in delay-1">
            Piensa en tus mejores ideas y plásmalas aquí
          </p>

          <Link to="/planner" className="cta-button fade-in delay-2">
            Plan Your Room
          </Link>
        </section>


        <section id="SobreNosotros">
          <h2 className="fade-in">Quiénes Somos</h2>

          <div className="SobreNosotros-grid fade-in-up">
            <div className="SobreNosotros-card">
              <div className="image-wrapper">
                <img src="/img/sobre-nosotros.png" alt="SobreNosotros" />
              </div>
              <p className="descripcion">
                Esta es nuestra primera página web y decidimos crearla sobre un
                room planner, un proyecto que nos motivó a aprender más cada
                día. Le dedicamos tiempo, esfuerzo y estudio, y gracias al
                trabajo en equipo logramos construir algo que nos hace sentir
                orgullosas. Este es solo el comienzo de todo lo que podemos
                lograr juntas.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Landing;
