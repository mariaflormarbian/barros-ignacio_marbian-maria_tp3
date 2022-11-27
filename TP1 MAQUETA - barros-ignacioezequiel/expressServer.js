import express from 'express';
import HomeRouter from './routes/home.routes.js';
import ProjectRouter from './routes/projects.routes.js';

const app = express(); 

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); 

app.use('/', HomeRouter);
app.use('/', ProjectRouter);

app.listen(2022, function () {
    console.log('Server is running on port 2022');
})