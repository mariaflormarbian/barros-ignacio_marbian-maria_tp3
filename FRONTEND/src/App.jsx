import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";

// Componente
import NavBar from "./components/NavBar";

// Paginas
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutMePage from "./pages/AboutMePage";
import ContactPage from "./pages/ContactPage";
import AdminPage from "./pages/AdminPage";
import EditPage from "./pages/EditPage";
import DeletePage from "./pages/DeletePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NewProjectPage from "./pages/NewProjectPage";

// Pasarlo a componente
function RoutePrivate({ isAutenticate, children }) {

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAutenticate) {
      navigate('/login');
    }
  }, [isAutenticate])

  // return isAutenticate ? children : <h1>Acceso denegado</h1>
  return isAutenticate ? children : null
}

function App() {

  const navigate = useNavigate();

  const [isAutenticate, setIsAutenticate] = useState(false);

  function onLogin(token, user) {

    if (token) {
      setIsAutenticate(true);
      navigate('/admin');
    } else {
      setIsAutenticate(false);
    }
  }

  return (

    <div>

      <NavBar />
      <main id="content-wrapper">

        <Routes>

          {/* Login */}
          <Route path="/login" element={<LoginPage onLogin={onLogin} />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Paginas */}
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutMePage />} />

          {/* Admin */}
          <Route path="/admin" element={<RoutePrivate isAutenticate={isAutenticate}> <AdminPage /> </RoutePrivate>} />
          <Route path="/projects/edit/:id" element={<RoutePrivate isAutenticate={isAutenticate}> <EditPage /> </RoutePrivate>} />
          <Route path="/projects/delete/:id" element={<RoutePrivate isAutenticate={isAutenticate}> <DeletePage /> </RoutePrivate>} />
          <Route path="/newproject" element={<RoutePrivate isAutenticate={isAutenticate}> <NewProjectPage /> </RoutePrivate>} />

          {/* 404 */}
          <Route path="*" element={<h1>404</h1>} />

        </Routes>

      </main>
    </div>
  );
}

export default App;
