const express = require('express')
const Router = express.Router()
const authenticate = require('../middleware/auth')

const { login, dashboard } = require('../controllers/main');

Router.route('/dashboard').get(authenticate, dashboard);
Router.route('/login').post(login);

module.exports = Router;
