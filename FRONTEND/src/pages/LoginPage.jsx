import { useState } from "react";
import * as UsersService from "../services/users.services";
import {login} from '../services/users.services'; 
import { useNavigate } from 'react-router-dom'

function LoginPage({onLogin}) {
      const navigate = useNavigate();
    
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
    
      function emailChange(event) {
        setEmail(event.target.value);
      }
      function passwordChange(event) {
        setPassword(event.target.value);
      }
    
      function loginUser(event) {
        event.preventDefault();
        login(email, password)
       .then(({token, user})=>{
          onLogin(token, user);
       })
      }
  return (
    <section id="contact" className="full-height px-lg-5">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8 pb-4">
            <h1>Iniciar sesión</h1>
          </div>

          <div className="col-lg-8">
            <form
             onSubmit={loginUser}
              className="row g-lg-3 gy-3"
            >
              <div className="form-group col-md-6">
                <label className="visually-hidden" htmlFor="email">
                  Email
                </label>
                <input
                 onChange={emailChange} value={email}
                  className="form-control"
                  placeholder="Email"
                />
              </div>

              <div className="form-group col-md-6">
                <label className="visually-hidden" htmlFor="link">
                  Contraseña
                </label>
                <input
                  type="password"
                  onChange={passwordChange} value={password}

                  className="form-control"
                  placeholder="Contraseña"
                />
              </div>

              <div className="form-group col-12 d-grid">
                <button type="submit" className="btn btn-brand">
                  Iniciar sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
