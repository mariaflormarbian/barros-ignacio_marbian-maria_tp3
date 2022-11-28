import * as ProjectsService from "../../services/projects.services.js";
import * as TestimonialsService from "../../services/testimonials.services.js";

function findAll(req, res) {
  const filter = {};

  if (req.query.state) {
    req.query.state === "true" ? (filter.state = true) : (filter.state = false);
  }

  if (req.query.technologies) {
    filter.technologies = req.query.technologies;
  }

  ProjectsService.traerProjects(filter)
    .then(function (projects) {
      res.status(200).json(projects);
    })
    .catch(function (err) {
      res.status(500).json({ message: "Error al traer los proyectos" });
    })

}

function create(req, res) {

  const project = {
    name: req.body.name,
    description: req.body.description,
    link: req.body.link,
    img: req.body.img,
    state: req.body.state,
    technologies: ['HTML']
  };

  if (req.body.technologies) {

    typeof req.body.technologies === 'string' ? project.technologies.push(req.body.technologies) : project.technologies = req.body.technologies;

  }

  ProjectsService.guardarProject(project)
    .then(function (projectNuevo) {
      res.status(201).json(projectNuevo);
    })
    .catch(function (err) {
      res
        .status(500)
        .json({ message: "Error al intentar guardar el Proyecto" });
    });
}

function deleteById(req, res) {
  const id = req.params.id;

  ProjectsService.eliminarProject(id)
    .then(function (projectEliminado) {
      res.status(200).json(projectEliminado);
    })
    .catch(function (err) {
      res.status(500).json({ message: "Error al eliminar el proyecto" });
    });
}

function findById(req, res) {
  const id = req.params.id;

  ProjectsService.traerProjectByID(id).then(function (project) {
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: "Projecto no encontrado" });
    }
  });
}

function editById(req, res) {
  const id = req.params.id;
  const project = {};

  if (req.body.name) {
    project.name = req.body.name;
  }

  if (req.body.description) {
    project.description = req.body.description;
  }

  if (req.body.link) {
    project.link = req.body.link;
  }

  if (req.body.img) {
    project.img = req.body.img;
  }

  if (req.body.state) {
    project.state = req.body.state;
  }

  if (req.body.technologies) {
    project.technologies = req.body.technologies;
  }

  ProjectsService.editarProject(id, project)
    .then(function () {
      return ProjectsService.traerProjectByID(id);
    })
    .then(function (projectEditado) {
      res.status(200).json(projectEditado);
    });
}

function findTestimonials(req, res) {
  
  const id = req.params.id;

  TestimonialsService.findTestimonials(id)
    .then(function (testimonials) {
      res.status(200).json(testimonials);
    });
}

function createTestimonial(req, res) {

  const id = req.params.id;

  const testimony = {
    client: req.body.client,
    company: req.body.company,
    testimony: req.body.testimony,
  };

  TestimonialsService.createTestimonial(id, testimony)
  .then(function (testimony) {
    res.status(201).json(testimony);
  })
  .catch(function (err) {
    res.status(500).json({ message: "Error al intentar guardar el testimonio" });
  });
}

function deleteTestimonyById(req, res) {
  const idTestimony = req.params.idTestimony;

  TestimonialsService.deleteTestimonyById(idTestimony)
    .then(function (testimony) {
      res.status(200).json(testimony);
    })
    .catch(function (err) {
      res.status(500).json({ message: "Error al eliminar el testimonio" });
    });
}

export {
  findAll,
  create,
  deleteById,
  findById,
  editById,
  findTestimonials,
  createTestimonial,
  deleteTestimonyById,
};
