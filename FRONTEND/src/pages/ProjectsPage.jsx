import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import * as ProjectsService from '../services/projects.services'

function ProjectsPage(){

    const [project, setProject] = useState('')

    const [projects, setProjects] = useState([])

    useEffect(() => {
        ProjectsService.findAll()
            .then(data => {
                setProject(data[0].id)
                setProjects(data)
            })
    }, [])

    return (

    <section id="work" className="full-height px-lg-5">

        <div className="container">
    
            <div className="row pb-4">
                <div className="col-lg-8">
                    <h6 className="text-brand">PROYECTOS</h6>
                    <h1>Mis Proyectos</h1>
                </div>
            </div>
    
            <div className="row gy-4">
             {projects.map((project)=>{
                        return (
                            <ul>
                            <li>{project.name}</li>
                            <li>{project.description}</li>
                            <li>{project.link}</li>
                            <img class="img-fluid w-100 pb-1" src="{project.img}"id="MainImg" alt="imagen proyecto" />
                            <li>{project.technologies}</li>
                            </ul>
                        )
                    })}
    
            </div>
    
        </div>
    
    </section>
    
    )
}

export default ProjectsPage