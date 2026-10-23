import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';
import Contato from './modules/Contato';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
login.init();
cadastro.init();

const addContato = new Contato('.form-addContato');
const editContato = new Contato('.form-editContato');

addContato.init();
editContato.init();

// import './assets/css/style.css'