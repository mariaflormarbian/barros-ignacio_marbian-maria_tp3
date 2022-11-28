
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import * as ProjectsService from '../services/projects.services'

function AdminPage(){
    
    const [project, setProject] = useState('')

    const [projects, setProjects] = useState([])

    useEffect(() => {
        ProjectsService.findAll()
            .then(data => {
                // setProject(data[0].id)
                console.log(data)
                setProjects(data)
            })
    }, [])
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
                        <p className="h3">
                            {projects.length}
                        </p>
                        <span>Proyectos</span>
                    </div>
                    <div>
                        <span className="las la-code ps-2"></span>
                    </div>

                </div>

                <div className="card-single bg-base p-4 rounded-4">
                    <div>
                        <p className="h3">
                            {/* <%= projects.filter(obj=> obj.public === false).length %> */}
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

                            <Link to="/newproject" className="btn btn-brand">Agregar Proyecto</Link>

                        </div>

                        <div className="bg-base">

                            <table className="table">

                                <thead>

                                    <tr>
                                        <th scope="col">
                                            Proyecto
                                        </th>
                                        <th scope="col">
                                            Descripción
                                        </th>
                                        <th scope="col">
                                            Link
                                        </th>
                                        <th scope="col">
                                            Imagen
                                        </th>
                                        <th scope="col">
                                            Tecnologías
                                        </th>
                                        <th scope="col">
                                            Público
                                        </th>
                                        <th scope="col">
                                            Acciones
                                        </th>

                                    </tr>

                                </thead>

                                <tbody>

             {projects.map((project)=>{
                        return (

                                        <tr>

                                            <td>
                                            {project.name}
                                            </td>
                                            <td>
                                               {project.description}
                                            </td>
                                              <td>
                                              {project.link}
                                           </td>
                                            <td>
                                              <img className="img-fluid w-100 pb-1" src="{project.img}" alt="imagen proyecto" />
                                            </td>
                                            <td>
                                                
                                            {project.technologies}
                                            </td>

                                            <td>
                                                {
                                                    if(project.state){
                                                        "true"
                                                    }else{
                                                        "false"
                                                    }
                                                }
                                            </td> 

                                            {/* <td>

                                                <form action="/admin/projects/<%= element._id %>/editar" className="pb-3 pt-3">

                                                    <button type="submit" className="btn btn-success">Editar</button>

                                                </form>

                                                <form action="/admin/projects/<%= element._id %>/eliminar" className="pb-3 pt-3" method="get">

                                                    <button type="submit" className="btn btn-danger">Eliminar</button>

                                                </form>

                                                <form action="/admin/projects/<%= element._id %>/publicar" className="pb-3 pt-3" method="post">

                                                    <input className="visually-hidden" type="number" name="public" id="public" value="<%= (element.public) ? 1 : 0 %>">

                                                    <button id="butonPublic" type="submit" className="btn btn-primary"><%= (element.public) ? 'Ocultar' : 'Mostrar' %></button>

                                                </form>

                                            </td> */}

                                        </tr>
                        )
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
    
    )
}

export default AdminPage