import { Link } from "react-router-dom";

function NavBar() {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">

      <div className="container flex-lg-column">
        <a className="navbar-brand mx-lg-auto mb-lg-4" href="#">
            <span className="h3 fw-bold d-block d-lg-none">Gana Alemania</span>
            <img src="../../public/imgs/foto-perfil.jpg" alt="Imagen foto de usuario"  className="d-none d-lg-block rounded-circle"/>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

          <span className="navbar-toggler-icon"></span>

        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto flex-lg-column text-lg-center">

            <li className="nav-item bg-transparent">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/services">Servicios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/projects">Proyectos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/technologies">Tecnologías</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/about">Sobre mí</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/contact">Contacto</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/admin">Admin</Link>
            </li>
            
          </ul>

        </div>

      </div>
      
    </nav>
  )
}

export default NavBar;