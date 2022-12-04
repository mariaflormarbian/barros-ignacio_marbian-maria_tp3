import express from 'express'
import * as usersApiController from '../controllers/users.api.controller.js'

const router = express.Router()

router.route('/api/users')
    .get(usersApiController.find)
    .post(usersApiController.create);    

router.route('/api/users/login')
    .post(usersApiController.login);

router.route('/api/users/:id')
    .get(usersApiController.findById)
    .delete(usersApiController.deleteById);

export default router