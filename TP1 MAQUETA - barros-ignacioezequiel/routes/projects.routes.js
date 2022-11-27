import express  from "express";
import * as ProjectsController from '../controllers/projects.controller.js';

const router = express.Router();

router.get('/proyectos', ProjectsController.verTodos);

router.get('/admin/projects', ProjectsController.verAdmin);

router.route('/admin/projects/nuevo')
    .get(ProjectsController.formModificar)
    .post(ProjectsController.guardar);

router.route('/admin/projects/:id/editar')
    .get(ProjectsController.formModificar)
    .post(ProjectsController.editar);

router.route('/admin/projects/:id/eliminar')
    .get(ProjectsController.formEliminar)
    .post(ProjectsController.eliminar);

router.post('/admin/projects/:id/publicar', ProjectsController.publico);


export default router;