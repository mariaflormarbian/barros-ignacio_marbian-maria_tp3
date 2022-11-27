import * as ProjectsServices from '../services/projects.services.js';

function verTodos(req, res) {

    ProjectsServices.traerProjects()
        .then(function (projects) {

            projects = projects.filter(obj=> obj.public === true)

            res.render('proyectos/proyectos', { projects, delay: 0 })
        })
}

function verAdmin(req, res) {
    ProjectsServices.traerProjects()
        .then(function (projects) {
            res.render('proyectos/admin/adminProject', { projects })
        })
}

function formModificar(req, res) {
    const id = req.params.id;

    ProjectsServices.projectsById(id)
        .then(function (project) {

            console.log(project)
            res.render('proyectos/admin/modificar', { project });

        })
}

function formEliminar(req, res) {
    const id = req.params.id;

    ProjectsServices.projectsById(id)
        .then(function (project) {

            console.log(project)
            res.render('proyectos/admin/eliminar', { project });

        })
}

function guardar(req, res) {

    ProjectsServices.saveProject({
        name: req.body.name,
        link: req.body.link,
        img: req.body.img,
        public: (req.body.public) ? true : false,
        description: req.body.description,
    })
        .then(function (NewProject) {
            res.render('success', { msg: `Proyecto guardado` });
        })
        .catch(function (err) {
            res.render('404', { msg: 'Error al guardar el proyecto' });
        })
}

function editar(req, res) {
    const id = req.params.id

    const project = {
        name: req.body.name,
        link: req.body.link,
        img: req.body.img,
        public: (req.body.public) ? true : false,
        description: req.body.description
    }

    ProjectsServices.editProject(id, project)
        .then(function (result) {
            res.render('success', { msg: 'Proyecto editado' });
        })
        .catch(function (err) {
            res.render('404', { msg: 'Error al editar el proyecto' });
        })
}

function eliminar(req, res) {
    const id = req.params.id

    ProjectsServices.deleteProject(id)
        .then(function (result) {
            res.render('success', { msg: 'Producto eliminado' });
        })
        .catch(function (err) {
            res.render('404', { msg: 'Error al eliminar el proyecto' });
        })
}

function publico(req, res) {
    
    const id = req.params.id
    const bool = (parseInt(req.body.public)) ? false : true;

    ProjectsServices.publicProject(id, bool);

    ProjectsServices.traerProjects()
        .then(function (projects) {
            res.redirect('/admin/projects')
        })
}

export {
    verTodos,
    verAdmin,
    formModificar,
    guardar,
    editar,
    formEliminar,
    eliminar,
    publico
}