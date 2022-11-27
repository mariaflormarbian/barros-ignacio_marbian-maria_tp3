import express  from "express";

const router = express.Router();

router.get('/', function (req, res) {
    res.render('portfolio/inicio');
})

router.get('/servicios', function (req, res) {
    res.render('portfolio/servicios');
})

router.get('/sobre-mi', function (req, res) {
    res.render('portfolio/sobreMi');
})

router.get('/tecnologias', function (req, res) {
    res.render('portfolio/tecnologias');
})

router.get('/contacto', function (req, res) {
    res.render('portfolio/contacto');
})

export default router;