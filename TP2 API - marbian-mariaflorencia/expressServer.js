import express from "express";
import ProjectsApiRouter from './api/routers/projects.api.routes.js'
import cors from 'cors'

const app = express();
app.set('view engine', 'ejs')

app.use('/', express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors()) 

// Rutas
app.use('/', ProjectsApiRouter);


app.listen(2022, function () {
  console.log("Mi portfolio profe --> http://localhost:2022");
});
