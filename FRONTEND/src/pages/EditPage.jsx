import * as ProjectsService from "../services/projects.services";
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function EditPage(){
    const {id} = useParams()
    const [project, setProject] = useState(null)
    const [projects, setProjects] = useState([])
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [link, setLink] = useState('')
    const [img, setImg] = useState('')
    // const [public, setPublic] = useState('')
    const [technologies, setTechnologies] = useState('')

    useEffect(()=>{
        ProjectsService.findById(id)
        .then((data)=>{
            setProject(data)
            return ProjectsService.getProject(id)
        })
        .then((data)=>{
            setProjects(data)
        })

    }, [id])
    function nameChange(event){
        setName(event.target.value)
    }
    function descriptionChange(event){
        setDescription(event.target.value)
    }
    function linkChange(event){
        setLink(event.target.value)
    }
    function imgChange(event){
        setImg(event.target.value)
    }
    // function publicChange(event){
    //     setPublic(event.target.value)
    // }
    function technologiesChange(event){
        setTechnologies(event.target.value)
    }
    function editProject(event){
        event.preventDefault()

        ProjectsService.editById({
            name,
            description,
            link,
            img,
            // public,
            technologies

        })
        .then(function(){
            navigate('/admin')
        })
    return (
<section id="contact" className="full-height px-lg-5">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8 pb-4">
            <h1>Crear Proyecto</h1>
          </div>

          <div className="col-lg-8">
          <form
             onSubmit={editProject}
              className="row g-lg-3 gy-3"
            >
              <div className="form-group col-md-6">
                <label className="visually-hidden" for="name">
                  Nombre
                </label>
                <input
                 onChange={nameChange} value={name}
                  className="form-control"
                  placeholder="Nombre"
                />
              </div>

              <div className="form-group col-md-6">
                <label className="visually-hidden" for="description">
                  Descripción
                </label>
                <input
                  type="description"
                  onChange={descriptionChange} value={description}

                  className="form-control"
                  placeholder="Descripción"
                />
              </div>
              <div className="form-group col-md-6">
                <label className="visually-hidden" for="link">
                  Link
                </label>
                <input
                  type="link"
                  onChange={linkChange} value={link}

                  className="form-control"
                  placeholder="Link"
                />
              </div>

              <div className="form-group col-md-6">
                <label className="visually-hidden" for="img">
                  Imagen
                </label>
            
 <input
        type="text"
        id="img"
        name="img"
        class="form-control"
        onChange={imgChange}
        value={img}
        placeholder="Imagen"

/>
              </div>

              {/* <div className="form-group col-md-6">
                <label className="form-check-label" for="public">
                  Público
                </label>
                <input
                type="checkbox"
                id="public"
                name="public"
                onChange={publicChange} 
                className="form-check-input"
                value={public} />
              </div> */}

              <div className="form-group col-md-6">
                <label className="visually-hidden" for="technologies">
                  Tecnologías
                </label>
                <input
                  type="technologies"
                  onChange={technologiesChange} value={technologies}

                  className="form-control"
                  placeholder="Tecnologías"
                />
              </div>
              <div className="form-group col-12 d-grid">
                <button type="submit" className="btn btn-brand">
                    Agregar                
                </button>
              </div>
              </form>
          </div>
           
        </div>
        
      </div>
    </section>
  );
}
}
export default EditPage