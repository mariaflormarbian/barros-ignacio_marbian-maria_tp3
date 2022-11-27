import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import './App.css'

import HomePage from "./pages/HomePage";
import ServicesPage from './pages/ServicesPage'; 
import ProjectsPage from './pages/ProjectsPage'; 
import AboutMePage from './pages/AboutMePage'; 
import TechnologiesPage from './pages/TechnologiesPage'; 
import ContactPage from './pages/ContactPage'; 
import AdminPage from './pages/AdminPage'; 
import EditPage from './pages/EditPage'; 
import DeletePage from './pages/DeletePage'; 

function App() {

  return (

    <BrowserRouter>

      <NavBar/>
      <main id="content-wrapper">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/technologies" element={<TechnologiesPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/delete" element={<DeletePage />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes> 
      </main>
    </BrowserRouter>

  )
}

export default App
