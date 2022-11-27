import * as UsersService from '../../services/users.services.js'
import jwt from 'jsonwebtoken';

function create(req, res) {
    
    const user = {
        email: req.body.email,
        password: req.body.password,
    }
    UsersService.create(user)
        .then((user) => {
            res.status(201).json(user);
        })
        .catch ((err) => {
            res.status(400).json({message: err.message});
        });
}

function find(req, res) {

    UsersService.find()
        .then((users) => {
            res.json(users);
        })
}

function login(req, res) {
    
    const user = {
        email: req.body.email,
        password: req.body.password
    }

    UsersService.login(user)
        .then((user) => {
            // const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
            const token = jwt.sign({ id: user._id, email: user.email }, 'CLAVE_SECRETA');
            res.status(200).json({ token, user });
        })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        });
}

function findById(req, res){

    const id = req.params.id;
    
    UsersService.findById(id)
        .then((user) => {
            res.status(200).json(user);
        });
}

function deleteById(req, res) {

    const id = req.params.id;

    UsersService.deleteById(id)
        .then((user) => {
            res.status(204).end();
        })
}

export {
    create,
    find,
    login,
    findById,
    deleteById
}