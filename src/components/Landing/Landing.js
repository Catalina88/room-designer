import "./styles/Landing.css";

const Landing = () => {
  return (
    <div>
      <main>
        <section id="hero">
          <h1 class="fade-in">Room Layout Planner</h1>
          <p class="fade-in delay-1">
            Piensa en tus mejores ideas y plásmalas aquí
          </p>
          <button class="cta-button fade-in delay-2">Plan Your Room</button>
        </section>

        <section id="SobreNosotros">
          <h2 class="fade-in">Quiénes Somos</h2>

          <div class="SobreNosotros-grid fade-in-up">
            <div class="SobreNosotros-card">
              <div class="image-wrapper">
                <img src="/img/sobre-nosotros.png" alt="SobreNosotros" />
              </div>
              <p class="descripcion">
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
