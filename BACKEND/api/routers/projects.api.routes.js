import express from 'express'
import * as projectsApiController from '../controllers/projects.api.controller.js'
import * as technologiesApiController from '../controllers/technologies.api.controller.js'
import * as galleryApiController from '../controllers/gallery.api.controller.js'
import { isLogin, isAdmin } from '../middleware/auth_middleware.js'

const router = express.Router()

// router.route('/api/projects*')
//     .all([isLogin, isAdmin])

router.route('/api/projects')
    .get([isLogin, isAdmin],projectsApiController.findAll)
    .post(projectsApiController.create)

router.route('/api/projects/:id')
    .get(projectsApiController.findById)
    .delete(projectsApiController.deleteById)
    .patch(projectsApiController.editById)  

router.route('/api/projects/:id/testimonials')
    .get(projectsApiController.findTestimonials)
    .post(projectsApiController.createTestimonial)

router.route('/api/projects/:id/testimonials/:idTestimony')
    .delete(projectsApiController.deleteTestimonyById)

router.route('/api/projects/:id/technologies')
    .get(technologiesApiController.findTechnologies)
    .post(technologiesApiController.addTechnologie)

router.route('/api/projects/:id/gallery')
    .get(galleryApiController.findGalleryByProject)
    .post(galleryApiController.createGallery)

router.route('/api/projects/:id/gallery/:idImage')
    .delete(galleryApiController.deleteImageById)
    
export default router
