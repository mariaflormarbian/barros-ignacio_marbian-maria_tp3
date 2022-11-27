import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import './App.css'

import HomePage from "./pages/HomePage";
import ServicesPage from './pages/ServicesPage'; 
import ProjectsPage from './pages/ProjectsPage'; 
import AboutMePage from './pages/AboutMePage'; 
import TechnologiesPage from './pages/TechnologiesPage'; 
import AdminPage from './pages/AdminPage'; 

function App() {

  return (

    <BrowserRouter>

      <NavBar/>
      <main id="content-wrapper">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        {/* <Route path='/services' element={<ServicesPage />} /> */}
        {/* <Route path='/projects' element={<ProjectsPage />} /> */}
        {/* <Route path='/about' element={<AboutMePage />} /> */}
        {/* <Route path='/technologies' element={<TechnologiesPage />} /> */}
        {/* <Route path='/admin' element={<AdminPage />} /> */}
        {/* <Route path="*" element={<h1>404</h1>} /> */}
      </Routes> 
      </main>
    </BrowserRouter>

  )
}

export default App
