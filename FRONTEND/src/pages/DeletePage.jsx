import * as ProjectsService from "../services/projects.services";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function DeletePage() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [project, setProject] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [img, setImg] = useState("");
  const [state, setState] = useState("");
  const [technologies, setTechnologies] = useState("");

  useEffect(() => {
    ProjectsService.findById(id)
      .then((data) => {
        setProject(data);
        setName(data.name);
        setDescription(data.description);
        setLink(data.link);
        setImg(data.img);
        setState(data.state);
        setTechnologies(data.technologies);
      })
      .catch((error) => {
        console.log("No funciona");
      });
  }, [id]);

  function deleteProject(event) {
    event.preventDefault();

    ProjectsService.deleteById(id)
    .then(function () {
      navigate("/admin");
    });
  }
  return (
    <section id="contact" className="full-height px-lg-5">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8 pb-4">
            <h1>Eliminar Proyecto</h1>
          </div>

          <div className="col-lg-8">
            <form onSubmit={deleteProject} className="row g-lg-3 gy-3">
              <div className="form-group col-md-6">
                <label className="visually-hidden">Nombre</label>
                <input
                  value={name}
                  disabled
                  className="form-control"
                  placeholder="Nombre"
                />
              </div>

              <div className="form-group col-md-6">
                <label className="visually-hidden">Descripción</label>
                <input
                  type="description"
                  value={description}
                  disabled
                  className="form-control"
                  placeholder="Descripción"
                />
              </div>
              <div className="form-group col-md-6">
                <label className="visually-hidden">Link</label>
                <input
                  type="link"
                  disabled
                  value={link}
                  className="form-control"
                  placeholder="Link"
                />
              </div>

              <div className="form-group col-md-6">
                <label className="visually-hidden">Imagen</label>

                <input
                  type="text"
                  id="img"
                  name="img"
                  disabled
                  className="form-control"
                  value={img}
                  placeholder="Imagen"
                />
              </div>

              <div className="form-group col-md-6">
                <label className="form-check-label">Público</label>
                <input
                  type="checkbox"
                  id="state"
                  disabled
                  name="state"
                  checked={state}
                  className="form-check-input"
                />
              </div>

              <div className="form-group col-md-6">
                <label className="visually-hidden">Tecnologías</label>
                <input
                  type="technologies"
                  value={technologies}
                  className="form-control"
                  disabled
                  placeholder="Tecnologías"
                />
              </div>
              <div className="form-group col-12 d-grid">
                <button type="submit" className="btn btn-brand">
                  Eliminar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default DeletePage;
