
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from './pages/HomePage'; 
import ServicesPage from './pages/ServicesPage'; 
import ProjectsPage from './pages/ProjectsPage'; 
import AboutMePage from './pages/AboutMePage'; 
import TechnologiesPage from './pages/TechnologiesPage'; 
import AdminPage from './pages/AdminPage'; 
import './App.css'

function App() {

  return (

    <div>
      <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container flex-lg-column">

      <Link className="navbar-brand mx-lg-auto mb-lg-4" to='/'>
        <span className="h3 fw-bold d-block d-lg-none">Ignacio Barros</span>
       </Link>

       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarNav">

        <ul className="navbar-nav ms-auto flex-lg-column text-lg-center">
          <li>  
          <Link to='/' className="nav-link">Home</Link>
          </li>
          <li>  
          <Link to='/services' className="nav-link">Servicios</Link>
          </li>
          <li>  
          <Link to='/projects' className="nav-link">Proyectos</Link>
          </li>
          <li>  
          <Link to='/about' className="nav-link">Sobre Mí</Link>
          </li>
          <li>  
          <Link to='/technologies' className="nav-link">Tecnologías</Link>
          </li>
          <li>  
          <Link to='/admin' className="nav-link">Admin</Link>
          </li>
        </ul>
        </div>
      </div>

      </nav>
      <main id="content-wrapper">

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/about' element={<AboutMePage />} />
        <Route path='/technologies' element={<TechnologiesPage />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path="*" element={<h1>404</h1>} />

      </Routes>
      </main>
      </BrowserRouter>

    </div>

  )
}

export default App
