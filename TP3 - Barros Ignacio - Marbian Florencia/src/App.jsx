
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

    <div className="Home">
      <BrowserRouter>
      <nav>
        <ul>
          <li>  
          <Link to='/'>Home</Link>
          </li>
          <li>  
          <Link to='/services'>Servicios</Link>
          </li>
          <li>  
          <Link to='/projects'>Proyectos</Link>
          </li>
          <li>  
          <Link to='/about'>Sobre Mí</Link>
          </li>
          <li>  
          <Link to='/technologies'>Tecnologías</Link>
          </li>
          <li>  
          <Link to='/admin'>Admin</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/about' element={<AboutMePage />} />
        <Route path='/technologies' element={<TechnologiesPage />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path="*" element={<h1>404</h1>} />

      </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
