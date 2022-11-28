import { useState } from "react";
import * as UsersService from "../services/users.services";
import { useNavigate } from 'react-router-dom'

function RegisterPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function emailChange(event) {
    setEmail(event.target.value);
  }
  
  function passwordChange(event) {
    setPassword(event.target.value);
  }

  function saveUser(event) {
    event.preventDefault();

    UsersService.create({
      email,
      password,
    }).then(function () {
      navigate("/admin");
    });
  }
  return (

    <section id="contact" className="full-height px-lg-5">

      <div className="container">

        <div className="row justify-content-center text-center">

          <div className="col-lg-8 pb-4">
            <h1>Registrarse</h1>
          </div>

          <div className="col-lg-8">

            <form onSubmit={saveUser} className="row g-lg-3 gy-3">

              <div className="form-group col-md-6">

                <label className="visually-hidden" for="email">
                  Email
                </label>

                <input className="form-control" placeholder="Email" onChange={emailChange} value={email} />

              </div>

              <div className="form-group col-md-6">
                <label className="visually-hidden" for="link">
                  Contraseña
                </label>
                <input type="password" className="form-control" placeholder="Contraseña" onChange={passwordChange} value={password} />
              </div>

              <div className="form-group col-12 d-grid">
                <button type="submit" className="btn btn-brand">
                  Registrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
