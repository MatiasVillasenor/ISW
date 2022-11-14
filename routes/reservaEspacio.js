const express = require('express');
const reservaEspacioController = require('../controllers/reservaEspacio');

const api = express.Router();

api.post('/reservaEspacio',reservaEspacioController.createreservaEspacio);

module.exports = api;
