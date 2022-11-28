import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import * as ProjectsService from "../services/projects.services";

function AdminPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    ProjectsService.findAll().then((data) => {
      console.log(data);
      setProjects(data);
    });
  }, []);

  function editProject(id) {
    ProjectsService.editById(id).then((data) => {
      setProjects(data);
    });
  }
  return (
    <section className="full-height px-lg-5">
      <div className="container">
        <div className="row pb-4">
          <div className="col-lg-8">
            <h6 className="text-brand">ADMINISTRAR PROYECTOS</h6>
            <h1>Mis Proyectos</h1>
          </div>
        </div>

        <div className="row gy-5">
          <div className="col-lg-12">
            <div className="cards">
              <div className="card-single bg-base p-4 rounded-4">
                <div>
                  <p className="h3">{projects.length}</p>
                  <span>Proyectos</span>
                </div>
                <div>
                  <span className="las la-code ps-2"></span>
                </div>
              </div>

              <div className="card-single bg-base p-4 rounded-4">
                <div>
                  <p className="h3">
                    {projects.filter((obj) => obj.state === false).length}
                  </p>
                  <span>Ocultos</span>
                </div>
                <div>
                  <span className="las la-eye-slash ps-2"></span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div>
                <div>
                  <div className="pb-4">
                    <Link to="/newproject" className="btn btn-brand">
                      Agregar Proyecto
                    </Link>
                  </div>

                  <div className="bg-base">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Proyecto</th>
                          <th scope="col">Descripción</th>
                          <th scope="col">Link</th>
                          <th scope="col">Imagen</th>
                          <th scope="col">Tecnologías</th>
                          <th scope="col">Público</th>
                          <th scope="col">Acciones</th>
                        </tr>
                      </thead>

                      <tbody>
                        {projects.map((project) => {
                          return (
                            <tr>
                              <td>{project.name}</td>
                              <td>{project.description}</td>
                              <td>{project.link}</td>
                              <td>
                                <img
                                  className="img-fluid w-100 pb-1"
                                  src={project.img}
                                  alt="imagen proyecto"
                                />
                              </td>
                              <td>{project.technologies}</td>

                              <td>{project.state ? "Si" : "No"}</td>

                              <td>
                                <Link
                                  className="btn btn-success"
                                  to={`/projects/edit/${project._id}`}
                                >
                                  Editar
                                </Link>
                                <Link
                                  className="btn btn-danger"
                                  to={`/projects/delete/${project._id}`}
                                >
                                  Eliminar
                                </Link>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminPage;
