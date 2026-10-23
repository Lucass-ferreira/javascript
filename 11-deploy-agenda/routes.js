const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController')
const cadatroController = require('./src/controllers/cadastroController')
const loginController = require('./src/controllers/loginController')
const contatoController = require('./src/controllers/contatoController')

const {loginRequired} = require('./src/middlewares/middlewares.js')

//rotas da home
route.get('/', homeController.index);

//rotas de login
route.get('/login', loginController.login)
route.post('/login/authenticate', loginController.authenticate)
route.get('/login/logout', loginController.logout)

route.get('/cadastro', cadatroController.cadastro)
route.post('/cadastro/register', cadatroController.register)

//rotas contatos
route.get('/contato', loginRequired, contatoController.index)
route.post('/contato/register', loginRequired, contatoController.register)
route.get('/contato/:id', loginRequired, contatoController.registerContato)
route.post('/contato/edit/:id', loginRequired, contatoController.editContato)
route.get('/contato/delete/:id', loginRequired, contatoController.deleteContato)

module.exports = route;