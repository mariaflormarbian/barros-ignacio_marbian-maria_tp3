import jwt from "jsonwebtoken";

import * as UsersService from "../../services/users.services.js";
import * as tokenService from "../../services/tokens.services.js";

function create(req, res) {
  const user = {
    email: req.body.email,
    password: req.body.password,
    role: req.body.role || "user",
  };

  UsersService.create(user)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
}

function find(req, res) {
  UsersService.find().then((users) => {
    res.json(users);
  });
}

function login(req, res) {

  console.log('me ejecuto');

  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  UsersService.login(user)
    .then((user) => {

      const token = jwt.sign({ id: user._id, email: user.email, role: user.role }, "CLAVE_SECRETA");

      console.log(token);

      tokenService.create({ token: token, user_id: user._id })
        .then(function () {
          res.status(200).json({ token, user });
        })
        .catch(function (err) {
          res.status(500).json({ message: "Error al crear el token" });
        });
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
}

function logout(req, res) {
  const token = req.headers["auth-token"];
  tokenService.deleteByToken(token)
    .then(function () {
      res.status(200).json({ message: "Sesión cerrada" });
    });
  }

function findById(req, res) {
  const id = req.params.id;

  UsersService.findById(id).then((user) => {
    res.status(200).json(user);
  });
}

function deleteById(req, res) {
  const id = req.params.id;

  UsersService.deleteById(id).then((user) => {
    res.status(204).end();
  });
}

export { create, find, login, logout, findById, deleteById };
