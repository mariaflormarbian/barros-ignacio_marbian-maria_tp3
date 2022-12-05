import * as TechnologiesService from "../../services/technologies.services.js";

function addTechnologie(req, res) {
  const idProject = req.params.id;
  const technologies = req.body.technologies;

  TechnologiesService.addTechnologie(idProject, technologies)
    .then(function (result) {
      res.status(200).json(result);
    })
    .catch(function (error) {
      res
        .status(500)
        .json({ message: "Error al agregar las tecnologias al proyecto" });
    });
}

function findTechnologies(req, res) {
  const idProject = req.params.id;

  TechnologiesService.findTechnologies(idProject)
    .then(function (technology) {
      res.status(200).json(technology.technologies);
    })
    .catch(function (error) {
      res
        .status(500)
        .json({ message: "Error al obtener las tecnologias del proyecto" });
    });
}

export { addTechnologie, findTechnologies };
