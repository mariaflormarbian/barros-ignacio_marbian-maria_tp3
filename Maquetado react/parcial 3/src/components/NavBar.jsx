import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function NavBar() {
  return (

    <nav className="navbar navbar-expand-lg bg-light">

      <div className="container-fluid">

        <a className="navbar-brand" href="#">Navbar</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

          <span className="navbar-toggler-icon"></span>

        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav">


            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="#">Features</Link>
              {/* <a className="nav-link" href="#">Features</a> */}
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="#">Pricing</Link>
              {/* <a className="nav-link" href="#">Pricing</a> */}
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="#">Disabled</Link>
              {/* <a className="nav-link disabled">Disabled</a> */}
            </li>

          </ul>

        </div>

      </div>
      
    </nav>
  )
}

export default NavBar;