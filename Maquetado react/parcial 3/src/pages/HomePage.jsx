import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section id="home" className="full-height px-lg-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold">
              Técnico Superior en{" "}
              <span className="text-brand">Diseño y Programación Web</span>
            </h1>
            <p
              className="lead mt-2 mb-4"
  
            >
              Soy Ignacio Barros y creo sitios web (frontend/backend).
            </p>

            <div>
              <Link to="/projects" className="btn btn-brand me-3 fw-bold">
                Explora mis proyectos
              </Link>
              <p className="link-custom">
                Cel: (+54) 9 11 3357 - 4710
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
