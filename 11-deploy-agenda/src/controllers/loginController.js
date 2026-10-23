const Login = require('../models/LoginModel');

exports.login = (req, res) => {
    if(req.session.user) return res.render('login-logado.ejs');
    return res.render('login.ejs');
}

exports.authenticate = async (req, res) => {
    try{
        const login  = new Login(req.body);
        await login.authenticate();

        if(login.errors.length > 0 ){
            req.flash('errors', login.errors);

            req.session.save(function() {
                return res.redirect('/login');
            });

            return;
        }

        req.flash('success', 'Seu usuário foi logado com sucesso.');
        req.session.user = login.user;
        req.session.save(function() {
            return res.redirect('/login');
        });
    } catch(e){
        console.log(e);
        res.render('404');
    }
    
}

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/')
}