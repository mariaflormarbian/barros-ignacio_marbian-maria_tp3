import { useState } from "react";
import * as RegisterService from "../services/register.services";

function RegisterPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, passwordChange] = useState("");

  function emailChange(event) {
    setEmail(event.target.value);
  }

  function saveUser(event) {
    event.preventDefault();

    RegisterService.create({
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
                <input onChange={emailChange} value={email} />
              </div>

              <div className="form-group col-md-6">
                <label className="visually-hidden" for="link">
                  Contraseña
                </label>
                <input onChange={passwordChange} value={password} />
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
