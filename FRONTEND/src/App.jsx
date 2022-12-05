
import {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";

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

function RoutePrivate({isAutenticate, children}) {
  const navigate = useNavigate();
    useEffect(() => {
      if(!isAutenticate){
navigate('/login');
      } 
    }, [isAutenticate])
   
   return isAutenticate ? children : <h1>Acceso denegado</h1>
}

function App() {
  const navigate = useNavigate();
  const [isAutenticate, setIsAutenticate] = useState(false);
function onLogin(token, user){
  if(token){
    setIsAutenticate(true);
    navigate('/');
  }else {
    setIsAutenticate(false);
  }
}

  return (
    <div>
      <NavBar />
      <main id="content-wrapper">
        <Routes>

          <Route path="/login" element={<LoginPage onLogin={onLogin}/>} />
          <Route path="/" element={<RoutePrivate isAutenticate={isAutenticate}><HomePage /> </RoutePrivate>}/>
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/admin" element={<RoutePrivate isAutenticate={isAutenticate}><AdminPage /> </RoutePrivate>}/>
          <Route path="/projects/edit/:id" element={<RoutePrivate isAutenticate={isAutenticate}><EditPage /> </RoutePrivate>}/>
          <Route path="/projects/delete/:id" element={<RoutePrivate isAutenticate={isAutenticate}><DeletePage /> </RoutePrivate>}/>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/newproject" element={<RoutePrivate isAutenticate={isAutenticate}><NewProjectPage /> </RoutePrivate>}/>

          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </main>
      </div>
  );
}

export default App;
