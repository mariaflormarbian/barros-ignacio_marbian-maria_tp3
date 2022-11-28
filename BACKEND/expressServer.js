import express from "express";
import ProjectsApiRouter from './api/routers/projects.api.routes.js'
import UsersApiRouter from './api/routers/users.api.routes.js'
import cors from 'cors'

const app = express();
app.set('view engine', 'ejs')

app.use(cors()) 
app.use('/', express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Rutas
app.use('/', ProjectsApiRouter);
app.use('/', UsersApiRouter);

app.listen(2022, function () {
  console.log("http://localhost:2022");
});
